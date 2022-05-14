import express from 'express';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';

export interface IResData {
  status: 'error' | 'success';
  message: string;
  data?: any;
}

export interface IRouteCallback {
  (
    req: express.Request,
    res: express.Response<IResData>,
    next: express.NextFunction
  ): void;
}

/**
 * error handler type
 */
export interface IErrorHandler {
  (
    err: createError.HttpError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void;
}

/**
 * http response  type
 */
export interface IHttpRes {
  message?: string;
  data?: { [key: string]: any } | any[] | string | null;
}

export interface IUser {
  userId: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface IPost {
  postId: string;
  author: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface ISgg {
  sggId: string;
  sggName: string;
}

export interface ISggArea extends ISgg {
  sggArea: string;
}

export interface IBound extends Express.Request {
  south: string;
  west: string;
  north: string;
  east: string;
}

export interface IUserInfo {
  email: string;
}

export interface IJwtPayloadUserInfo extends jwt.JwtPayload {
  email: string;
}
