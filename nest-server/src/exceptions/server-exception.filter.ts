import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
/* https://docs.nestjs.com/exception-filters#catch-everything */
/* https://docs.nestjs.com/faq/http-adapter#http-adapter */
@Catch()
export class ServerExceptionFiler implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    console.log(exception);
    const res: { status: number; message: string | object } = {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'internal server error',
    };

    if (exception instanceof HttpException) {
      res.status = exception.getStatus();
      res.message = exception.getResponse();
    }

    httpAdapter.reply(ctx.getResponse(), res, res.status);
  }
}
