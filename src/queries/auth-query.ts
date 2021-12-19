import knex from '../config/database-connection';
import { IUser } from '../types';

export const findUserByEmail = async (email: string): Promise<IUser> => {
  const users: IUser[] = await knex('users')
    .select('id as userId', 'email', 'password', 'created_at as createAt', 'updated_at as updatedAt')
    .where('email', '=', email);

  return users[0];
};

export const removeUserByEmail = async (email: string): Promise<IUser> => {
  const users: IUser[] = await knex('users')
    .delete()
    .where('email', '=', email)
    .returning(['id as userId', 'email', 'password', 'created_at as createAt', 'updated_at as updatedAt']);

  return users[0];
};

export const createUser = async (email: string, hash: string): Promise<IUser> => {
  const insertedUsers: IUser[] = await knex('users')
    .insert({ email, password: hash })
    .returning(['id as userId', 'email', 'password', 'created_at as createAt', 'updated_at as updatedAt']);

  return insertedUsers[0];
};

export const updatePassword = async (email: string, hash: string): Promise<IUser> => {
  const updatedUsers: IUser[] = await knex('users')
    .update({ email, password: hash })
    .where('email', '=', email)
    .returning(['id as userId', 'email', 'password', 'created_at as createAt', 'updated_at as updatedAt']);

  return updatedUsers[0];
};
