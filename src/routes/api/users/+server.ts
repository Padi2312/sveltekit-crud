import { fail, json, type RequestHandler } from '@sveltejs/kit';
import pool from '$lib/database';
import argon2 from 'argon2';


export const POST: RequestHandler = async ({ request }) => {
    try {
        const { username, email, password } = await request.json();

        if (!username) {
            throw new Error('Username is required');
        }
        if (!email) {
            throw new Error('Email is required');
        }
        if (!password) {
            throw new Error('Password is required');
        }

        const hashedPassword = await argon2.hash(password);
        const result = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword]);

        console.log(result)
        const user = result.rows[0];
        return json(user, { status: 201 });
    } catch (error) {
        throw fail(500, { error: true, details: error });
    }
}

export const GET: RequestHandler = async ({ }) => {
    try {
        const result = await pool.query('SELECT id,username,email FROM users');
        if (result.rows.length > 0) {
            return json(result.rows, { status: 200 });
        } else {
            return json({ error: 'User not found' }, { status: 404 });
        }
    } catch (error) {
        throw fail(500, { error: true, details: error });
    }
}