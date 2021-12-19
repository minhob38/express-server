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

export const updatePassword = async (email: string, hash: string): Promise<IUser> => {
  const updatedUsers: IUser[] = await knex('users')
    .update({ email, password: hash })
    .where('email', '=', email)
    .returning(['email', 'password', 'created_at as createAt', 'updated_at as updatedAt']);

  return updatedUsers[0];
};
