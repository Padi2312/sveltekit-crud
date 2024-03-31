import pg from 'pg';

// Create a database connection pool
const pool = new pg.Pool({
    user: 'example',
    host: 'localhost',
    database: 'example',
    password: 'example',
    port: 5432,
});

// Export the pool object for reuse
export default pool;