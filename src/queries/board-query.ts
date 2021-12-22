import knex from '../config/database-connection';
import { IPost } from '../types/types';

export const createPost = async (
  author: string,
  title: string,
  content: string
): Promise<IPost> => {
  const posts: IPost[] = await knex('posts')
    .insert({ author, title, content })
    .returning([
      'id as postId',
      'author',
      'title',
      'content',
      'created_at as createAt',
      'updated_at as updatedAt',
    ]);

  return posts[0];
};

export const findPosts = async (): Promise<IPost[]> => {
  const posts: IPost[] = await knex('posts').select(
    'id as postId',
    'author',
    'title',
    'content',
    'created_at as createAt',
    'updated_at as updatedAt'
  );

  return posts;
};

export const findPostById = async (postId: number): Promise<IPost | null> => {
  const posts: IPost[] = await knex('posts')
    .select(
      'id as postId',
      'author',
      'title',
      'content',
      'created_at as createAt',
      'updated_at as updatedAt'
    )
    .where('id', '=', postId);

  return posts[0] ? posts[0] : null;
};

export const updatePost = async (
  postId: number,
  content: string
): Promise<IPost> => {
  const posts: IPost[] = await knex('posts')
    .update({ content, updated_at: new Date().toISOString() })
    .where('id', '=', postId)
    .returning([
      'id as postId',
      'author',
      'title',
      'content',
      'created_at as createAt',
      'updated_at as updatedAt',
    ]);

  return posts[0];
};

export const removePostById = async (postId: number): Promise<IPost> => {
  const posts: IPost[] = await knex('posts')
    .delete()
    .where('id', '=', postId)
    .returning([
      'id as postId',
      'author',
      'title',
      'content',
      'created_at as createAt',
      'updated_at as updatedAt',
    ]);

  return posts[0];
};
