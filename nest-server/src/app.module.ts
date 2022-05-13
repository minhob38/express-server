import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthsModule } from './auths/auths.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import validationSchema from './configs/validationSchema';

// forRoot(동적모듈?)
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      // load: [databaseConfig, smsConfig, googleOAuthConfig, jwtConfig],
      isGlobal: true,
      validationSchema,
      validationOptions: { allowUnknown: true, abortEarly: true },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DOCKER_DB_PORT, 10),
      username: process.env.DOCKER_DB_USER,
      password: process.env.DOCKER_DB_PASSWORD,
      database: process.env.DOCKER_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    AuthsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('/auths');
  }
}
