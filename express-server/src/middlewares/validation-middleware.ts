import { validationResult } from 'express-validator';
import createError from 'http-errors';
import { IRouteCallback } from '../types/types';

// eslint-disable-next-line
export const validatorErrorChecker: IRouteCallback = (req, res, next) => {
  const errors = validationResult(req);
  const array = errors.array()[0];

  if (!errors.isEmpty()) {
    return next(createError(400, array.msg));
  }
  return next();
};
