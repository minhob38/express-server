import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { decodeBearerToken } from '../utils/auth-util';
import {
  NO_AUTHORIZATION_TOKEN,
  INVALID_ENVIROMENT_VARIABLE,
} from '../constants/error';
import { IJwtPayloadUserInfo } from '../types/types';

dotenv.config();

const { TOKEN_SECRET_KEY } = process.env;

export const checkAccessToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const accessToken: string | undefined = req.headers.authorization;

  if (!accessToken) {
    return next(NO_AUTHORIZATION_TOKEN);
  }

  if (!TOKEN_SECRET_KEY) {
    throw new Error(INVALID_ENVIROMENT_VARIABLE);
  }

  const decode: IJwtPayloadUserInfo = decodeBearerToken(accessToken);

  req.userInfo = { email: decode.email };

  next();
};

export const a = 3;
