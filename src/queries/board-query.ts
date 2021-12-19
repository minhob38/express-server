import knex from '../config/database-connection';
import { IPost } from '../types';

export const createPost = async (
  author: string,
  title: string,
  content: string
): Promise<IPost> => {
  const posts: IPost[] = await knex('posts')
    .insert({ author, title, content })
    .select(
      'id as postId',
      'author',
      'title',
      'content',
      'created_at as createAt',
      'updated_at as updatedAt'
    );

  return posts[0];
};

export const a = 3;
