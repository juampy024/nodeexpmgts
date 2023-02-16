import { User } from 'core/models/user';
import { pool } from 'dataBase';
import { QueryResult } from 'pg';

export const getUserByIdRepository = async (id: string) => {
  try {
    const response: QueryResult = await pool.query(`SELECT * FROM u_user_get_user_by_id(${id})`);
    return response.rows;
  } catch (e) {
    return e;
  }
};

export const getUserByUsernameRepository = async (username: string): Promise<User | null> => {
  try {
    const response: QueryResult | User = await pool.query(`SELECT * FROM u_user_get_user_by_username('${username}')`);
    if (response.rows.length > 0) return response.rows[0];
    return null;
  } catch (e: any) {
    return e;
  }
};

export const createUserRepository = async (user: User) => {
  try {
    const query = 'select u_user_entry_create($1,$2,$3,$4,$5,$6)';
    const values = [user.username, user.password, user.email, user.phone, user.created_datetime, user.deleted_datetime];

    const response: QueryResult = await pool.query(query, values);

    return response.rows;
  } catch (e) {
    return e;
  }
};
