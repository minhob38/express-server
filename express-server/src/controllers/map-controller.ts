import express from 'express';
import createError from 'http-errors';
import {
  findSggs,
  findSggByName,
  findSggsInBound,
  findSggsAreas,
} from '@src/queries/map-query';
import { ISgg, IResData, IBound, ISggArea } from '../types/types';
import logger from '../configs/winston-logger';
// getSggs(inbound),getSggs getSggAreas getSgg
export const getSggs = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // /sgg와 /sggs? 구분
  if (Object.keys(req.query).length !== 0) {
    return next();
  }

  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const sggs: ISgg[] = await findSggs();

    const data: IResData = {
      status: 'success',
      message: 'found sggs',
      data: sggs,
    };

    return res.status(200).json(data);
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const getSgg = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const { sggName } = req.params as { sggName: string };
    const sgg: ISgg = await findSggByName(sggName);

    const data: IResData = {
      status: 'success',
      message: 'found sgg',
      data: sgg,
    };

    return res.status(200).json(data);
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const getSggsQuery = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const bound = req.query as unknown as IBound;
    const sggs: ISgg[] = await findSggsInBound(bound);

    const data: IResData = {
      status: 'success',
      message: 'found sgg',
      data: sggs,
    };

    return res.status(200).json(data);
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};

export const getSggsAreas = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    logger.info(`${req.method} ${req.originalUrl}`);
    const sggsAreas: ISggArea[] = await findSggsAreas();

    const data: IResData = {
      status: 'success',
      message: "found sggs' area",
      data: sggsAreas,
    };

    return res.status(200).json(data);
  } catch (err) {
    logger.error(`${req.method} ${req.originalUrl} ${(err as Error).message}`);
    return next(createError(500, (err as Error).message));
  }
};
