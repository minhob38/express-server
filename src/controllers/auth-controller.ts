import express from 'express';
import { createHash, createToken, getIsMatchPassword } from '../utils/auth-util';
import { findUserByEmail, createUser } from '../queries/auth-query';
import { IResData } from '../types';

export const signUp = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { email, password } = req.body as { email: string, password: string };
    const user = await findUserByEmail(email);

    if (user) {
      const data: IResData = {
        status: 'error',
        message: 'user already exists',
      };

      return res.status(200).json(data);
    }

    const hash: string = createHash(password);
    const insertedUser = await createUser(email, hash);
    const token: string = createToken(insertedUser.email);

    const data: IResData = {
      status: 'success',
      message: 'user signed up',
      data: { access_token: token },
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

export const signIn = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { email, password } = req.body as { email: string, password: string };
    const user = await findUserByEmail(email);

    if (!user) {
      const data: IResData = {
        status: 'error',
        message: 'user does not exists',
      };

      return res.status(200).json(data);
    }

    const hash = user.password;
    const isMatchPassword = await getIsMatchPassword(password, hash);

    if (!isMatchPassword) {
      const data: IResData = {
        status: 'error',
        message: 'password is invalid',
      };

      return res.status(200).json(data);
    }

    const token: string = createToken(user.email);

    const data: IResData = {
      status: 'success',
      message: 'user signed in',
      data: { access_token: token },
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
