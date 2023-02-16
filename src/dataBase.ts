import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123456',
    database: 'maxAhorro',
    port: 5432
});

export { pool };