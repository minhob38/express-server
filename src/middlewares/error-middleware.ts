import express from 'express';
import createError from 'http-errors';
import { IResData } from '../types/types';

export const errorHandler = (
  err: createError.HttpError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const data: IResData = {
    status: 'error',
    message: err.message || 'internal server error',
  };

  return res.status(err.status || 500).json(data);
};

export const notFoundHandler = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const data: IResData = {
    status: 'error',
    message: 'not found',
  };

  return res.status(404).json(data);
};
