import createError from 'http-errors';
import {
  createHash,
  createToken,
  getIsMatchPassword,
} from '../utils/auth-util';
import {
  findUserByEmail,
  removeUserByEmail,
  createUser,
  updatePassword,
} from '../queries/auth-query';
import { IUser, IRouteCallback } from '../types/types';
import logger from '../configs/winston-logger';

export const postSignUp: IRouteCallback = async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const { email, password } = req.body as { email: string; password: string };
    const user: IUser = await findUserByEmail(email);

    if (user) {
      return res.status(200).json({
        status: 'error',
        message: 'user already exists',
      });
    }

    const hash: string = createHash(password);
    const insertedUser: IUser = await createUser(email, hash);
    const token: string = createToken(insertedUser.email);

    return res.status(200).json({
      status: 'success',
      message: 'user signed up',
      data: { access_token: token },
    });
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const postSignIn: IRouteCallback = async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const { email, password } = req.body as { email: string; password: string };
    const user: IUser = await findUserByEmail(email);

    if (!user) {
      return res.status(200).json({
        status: 'error',
        message: 'user does not exists',
      });
    }

    const hash: string = user.password;
    const isMatchPassword: boolean = await getIsMatchPassword(password, hash);

    if (!isMatchPassword) {
      return res.status(200).json({
        status: 'error',
        message: 'password is invalid',
      });
    }

    const token: string = createToken(user.email);

    return res.status(200).json({
      status: 'success',
      message: 'user signed in',
      data: { access_token: token },
    });
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const patchPassword = async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const {
      email,
      current_password: currentPassword,
      new_password: newPassword,
    } = req.body as {
      email: string;
      current_password: string;
      new_password: string;
    };

    if (currentPassword === newPassword) {
      return res.status(200).json({
        status: 'error',
        message: 'password is same',
      });
    }

    const user: IUser = await findUserByEmail(email);

    if (!user) {
      return res.status(200).json({
        status: 'error',
        message: 'user does not exists',
      });
    }

    const crrentHash: string = user.password;
    const isMatchPassword: boolean = await getIsMatchPassword(
      currentPassword,
      crrentHash
    );

    if (!isMatchPassword) {
      return res.status(200).json({
        status: 'error',
        message: 'password is invalid',
      });
    }

    const newHash: string = createHash(newPassword);
    await updatePassword(user.email, newHash);

    return res.status(200).json({
      status: 'success',
      message: 'password changed',
    });
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const deleteSignOut: IRouteCallback = async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const { email, password } = req.body as { email: string; password: string };
    const user: IUser = await findUserByEmail(email);

    if (!user) {
      return res.status(200).json({
        status: 'error',
        message: 'user does not exists',
      });
    }

    const hash: string = user.password;
    const isMatchPassword: boolean = await getIsMatchPassword(password, hash);

    if (!isMatchPassword) {
      return res.status(200).json({
        status: 'error',
        message: 'password is invalid',
      });
    }

    await removeUserByEmail(email);

    return res.status(200).json({
      status: 'success',
      message: 'user signed out',
    });
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};
