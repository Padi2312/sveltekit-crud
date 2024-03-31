import type { Actions } from './$types';
import pool from '$lib/database';
import argon2 from 'argon2';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const username: string = (formData.get('username') ?? '') as string;
            const password: string = (formData.get('password') ?? '') as string;

            if (!username) {
                throw new Error('Username is required');
            }
            if (!password) {
                throw new Error('Password is required');
            }

            // Perform login check against the database
            const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

            if (result.rows.length === 0) {
                return fail(401, { invalid: true, details: 'User not found' });
            }

            const user = result.rows[0];
            const passwordMatch = await argon2.verify(user.password, password);

            if (!passwordMatch) {
                return fail(401, { invalid: true });
            }

            return { success: true }
        } catch (error) {
            return fail(500, { error: true, details: error });
        }
    },
};
