import express from 'express';
import dotenv from 'dotenv';
import { IResData } from '../types/types';

dotenv.config();

const router: express.Router = express.Router();

router.get(
  '/',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const data: IResData = {
      status: 'success',
      message: `test conducted :) - ${new Date().getSeconds()}`,
    };

    return res.status(200).json(data);
  }
);

router.get(
  '/kill-server',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log('server terminated : (');
    throw new Error('kill-server');
  }
);

export default router;
