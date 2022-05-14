import createError from 'http-errors';
import {
  createPost,
  findPosts,
  findPostById,
  updatePost,
  removePostById,
} from '../queries/board-query';
import { IPost, IRouteCallback } from '../types/types';
import logger from '../configs/winston-logger';

export const postPost: IRouteCallback = async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const { author, title, content } = req.body as {
      author: string;
      title: string;
      content: string;
    };
    await createPost(author, title, content);

    return res.status(200).json({
      status: 'success',
      message: 'created post',
    });
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const getPosts: IRouteCallback = async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const posts: IPost[] = await findPosts();

    return res.status(200).json({
      status: 'success',
      message: 'found posts',
      data: posts,
    });
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const getPost: IRouteCallback = async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const { postId } = req.params as { postId: string };
    const post: IPost | null = await findPostById(parseInt(postId, 10));

    // TODO: data가 null일때 응답처리하기
    return res.status(200).json({
      status: 'success',
      message: 'found post',
      data: post,
    });
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const patchPost: IRouteCallback = async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const { postId } = req.params as { postId: string };
    const { content } = req.body as { content: string };
    await updatePost(parseInt(postId, 10), content);

    return res.status(200).json({
      status: 'success',
      message: 'edited post',
    });
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const deletePost: IRouteCallback = async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const { postId } = req.params as { postId: string };
    await removePostById(parseInt(postId, 10));

    return res.status(200).json({
      status: 'success',
      message: 'deleted post',
    });
  } catch (err) {
    logger.log({
      level: 'error',
      message: `${req.method} ${req.originalUrl} ${(err as Error).message}`,
    });
    return next(createError(500, (err as Error).message));
  }
};
