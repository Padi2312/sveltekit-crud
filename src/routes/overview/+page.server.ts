import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import pool from '$lib/database';

export const load: PageServerLoad = async () => {
    try {
        const { rows } = await pool.query('SELECT id, username, email FROM users');
        return { users: rows };
    } catch (err) {
        throw error(500, 'Database error');
    }
};
