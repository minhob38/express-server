import { Module, MiddlewareConsumer, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthsModule } from './modules/auths/auths.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { BoardsModule } from './modules/boards/boards.module';
import { MapsModule } from './modules/maps/maps.module';
import { PagesModule } from './modules/pages/pages.module';
import { LoggerModule } from './logger/logger.module';
import { StudyModule } from './modules/study/study.module';
import { TestModule } from './modules/study/test.module';
import validationSchema from './configs/validation-schema';
import databaseConfig from './configs/database.config';
import tokenConfig from './configs/token.config';

@Module({
  imports: [
    /* https://docs.nestjs.com/techniques/configuration */
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [databaseConfig, tokenConfig],
      isGlobal: true,
      validationSchema,
      validationOptions: { allowUnknown: true, abortEarly: true },
    }),
    /* https://docs.nestjs.com/techniques/database */
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>('database.host'),
          port: configService.get<number>('database.port'),
          username: configService.get<string>('database.username'),
          password: configService.get<string>('database.password'),
          database: configService.get<string>('database.database'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
    }),
    CacheModule.register(),
    AuthsModule,
    BoardsModule,
    MapsModule,
    PagesModule,
    LoggerModule,
    /* module for nest study */
    StudyModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('/auths');
  }
}
