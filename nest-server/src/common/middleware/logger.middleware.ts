import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/*
[middleware]
- handler 전에 요청을 처리합니다.
- https://docs.nestjs.com/middleware#middleware
*/
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('logger');
    next();
  }
}
