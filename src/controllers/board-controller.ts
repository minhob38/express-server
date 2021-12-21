import express from 'express';
import {
  createPost,
  findPosts,
  findPostById,
  updatePost,
  removePostById,
} from '../queries/board-query';
import { IPost, IResData } from '../types';

export const postPost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { author, title, content } = req.body as {
      author: string;
      title: string;
      content: string;
    };
    await createPost(author, title, content);

    const data: IResData = {
      status: 'success',
      message: 'created post',
    };

    return res.status(200).json(data);
  } catch (err) {
    const data: IResData = {
      status: 'error',
      message: (err as Error).message,
    };
    return res.status(500).json(data);
  }
};

export const getPosts = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const posts: IPost[] = await findPosts();

    const data: IResData = {
      status: 'success',
      message: 'found posts',
      data: posts,
    };

    return res.status(200).json(data);
  } catch (err) {
    const data: IResData = {
      status: 'error',
      message: (err as Error).message,
    };
    return res.status(500).json(data);
  }
};

export const getPost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { postId } = req.params as { postId: string };
    const post: IPost | null = await findPostById(parseInt(postId, 10));

    const data: IResData = {
      status: 'success',
      message: 'found post',
      data: post,
    };

    // TODO: data가 null일때 응답처리하기

    return res.status(200).json(data);
  } catch (err) {
    const data: IResData = {
      status: 'error',
      message: (err as Error).message,
    };
    return res.status(500).json(data);
  }
};

export const patchPost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { postId } = req.params as { postId: string };
    const { content } = req.body as { content: string };
    await updatePost(parseInt(postId, 10), content);

    const data: IResData = {
      status: 'success',
      message: 'edited post',
    };

    return res.status(200).json(data);
  } catch (err) {
    const data: IResData = {
      status: 'error',
      message: (err as Error).message,
    };
    return res.status(500).json(data);
  }
};

export const deletePost = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { postId } = req.params as { postId: string };
    await removePostById(parseInt(postId, 10));

    const data: IResData = {
      status: 'success',
      message: 'deleted post',
    };

    return res.status(200).json(data);
  } catch (err) {
    const data: IResData = {
      status: 'error',
      message: (err as Error).message,
    };
    return res.status(500).json(data);
  }
};
