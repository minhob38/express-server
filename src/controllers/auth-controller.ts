import express from 'express';
import { createHash, createToken, getIsMatchPassword } from '../utils/auth-util';
import {
  findUserByEmail,
  removeUserByEmail,
  createUser,
  updatePassword
} from '../queries/auth-query';
import { IResData, IUser } from '../types';

export const postSignUp = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { email, password } = req.body as { email: string, password: string };
    const user: IUser = await findUserByEmail(email);

    if (user) {
      const data: IResData = {
        status: 'error',
        message: 'user already exists',
      };

      return res.status(200).json(data);
    }

    const hash: string = createHash(password);
    const insertedUser: IUser = await createUser(email, hash);
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

export const postSignIn = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { email, password } = req.body as { email: string, password: string };
    const user: IUser = await findUserByEmail(email);

    if (!user) {
      const data: IResData = {
        status: 'error',
        message: 'user does not exists',
      };

      return res.status(200).json(data);
    }

    const hash: string = user.password;
    const isMatchPassword: boolean = await getIsMatchPassword(password, hash);

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

export const patchPassword = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const {
      email,
      current_password: currentPassword,
      new_password: newPassword,
    } = req.body as { email: string, current_password: string, new_password: string };

    if (currentPassword === newPassword) {
      const data: IResData = {
        status: 'error',
        message: 'password is same',
      };

      return res.status(200).json(data);
    }

    const user: IUser = await findUserByEmail(email);

    if (!user) {
      const data: IResData = {
        status: 'error',
        message: 'user does not exists',
      };

      return res.status(200).json(data);
    }

    const crrentHash: string = user.password;
    const isMatchPassword: boolean = await getIsMatchPassword(currentPassword, crrentHash);

    if (!isMatchPassword) {
      const data: IResData = {
        status: 'error',
        message: 'password is invalid',
      };

      return res.status(200).json(data);
    }

    const newHash: string = createHash(newPassword);
    await updatePassword(user.email, newHash);

    const data: IResData = {
      status: 'success',
      message: 'password changed',
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

export const deleteSignOut = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { email, password } = req.body as { email: string, password: string };
    const user: IUser = await findUserByEmail(email);

    if (!user) {
      const data: IResData = {
        status: 'error',
        message: 'user does not exists',
      };

      return res.status(200).json(data);
    }

    const hash: string = user.password;
    const isMatchPassword: boolean = await getIsMatchPassword(password, hash);

    if (!isMatchPassword) {
      const data: IResData = {
        status: 'error',
        message: 'password is invalid',
      };

      return res.status(200).json(data);
    }

    await removeUserByEmail(email);

    const data: IResData = {
      status: 'success',
      message: 'user signed out',
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
