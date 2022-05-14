import express from 'express';
import createError from 'http-errors';
import dotenv from 'dotenv';
import { decodeBearerToken } from '../utils/auth-util';
import { findUserByEmail } from '../queries/auth-query';
import {
  NO_AUTHORIZATION_TOKEN,
  INVALID_ENVIROMENT_VARIABLE,
  INTERNAL_SERVER_ERROR,
  USER_DOES_NOT_EXISTS,
} from '../constants/error';
import { IRouteCallback, IJwtPayloadUserInfo } from '../types/types';

dotenv.config();

const { TOKEN_SECRET_KEY } = process.env;
// eslint-disable-next-line
export const checkAccessToken: IRouteCallback = async (req, res, next) => {
  try {
    const accessToken: string | undefined = req.headers.authorization;

    if (!accessToken) {
      return next(createError(401, NO_AUTHORIZATION_TOKEN));
    }

    if (!TOKEN_SECRET_KEY) {
      throw new Error(INVALID_ENVIROMENT_VARIABLE);
    }

    const decode: IJwtPayloadUserInfo = decodeBearerToken(accessToken);
    const { email } = decode;
    const user = await findUserByEmail(email);

    if (!user) {
      return next(createError(401, USER_DOES_NOT_EXISTS));
    }

    req.userInfo = { email };

    return next();
  } catch (err) {
    // TODO: decode 에러에 따라, 에러핸들링하기
    return next(createError(500, INTERNAL_SERVER_ERROR));
  }
};
