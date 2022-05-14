import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthsModule } from './auths/auths.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { BoardModule } from './board/board.module';
import { BoardSService } from './board-s/board-s.service';
import { BoardsService } from './boards/boards.service';
import { BoardsModule } from './boards/boards.module';
import { MapsService } from './maps/maps.service';
import { MapsModule } from './maps/maps.module';
import { PagesModule } from './pages/pages.module';
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
    AuthsModule,
    BoardModule,
    BoardsModule,
    MapsModule,
    PagesModule,
  ],
  controllers: [AppController],
  providers: [AppService, BoardSService, BoardsService, MapsService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('/auths');
  }
}
