import express from 'express';
import { createPost } from '../queries/board-query';
import { IResData } from '../types';

export const postPosts = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { author, title, content } = req.body as {
      author: string, title: string, content: string
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

export const a = 3;
