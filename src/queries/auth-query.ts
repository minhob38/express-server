import knex from '../config/database-connection';
import { IUser } from '../types';

export const findUserByEmail = async (email: string): Promise<IUser> => {
  const users: IUser[] = await knex('users')
    .select('email', 'password', 'created_at as createAt', 'updated_at as updatedAt')
    .where('email', '=', email);

  return users[0];
};

export const createUser = async (email: string, hash: string): Promise<IUser> => {
  const insertedUsers: IUser[] = await knex('users')
    .insert({ email, password: hash })
    .returning(['email', 'password', 'created_at as createAt', 'updated_at as updatedAt']);

  return insertedUsers[0];
};
