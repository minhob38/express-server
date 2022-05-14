import { IErrorHandler, IRouteCallback } from '../types/types';

export const errorHandler: IErrorHandler = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'internal server error',
  });
};

export const notFoundHandler: IRouteCallback = (req, res, next) => {
  return res.status(404).json({
    status: 'error',
    message: 'not found',
  });
};
