import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ServerExceptionFiler } from './exceptions/server-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* validation
  - https://docs.nestjs.com/techniques/validation#validation
  */
  /* validation */
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  /* [exception filter]
  - 아래 → 위 순서로 filtering합니다. (ServerExceptionFiler만 있어도 되지만, filter 동작원리를 위해 분리하였습니다.)
  */
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ServerExceptionFiler(httpAdapter));
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
