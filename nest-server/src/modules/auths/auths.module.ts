import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';
import { Users } from '../../entities/users.entity';
import { AuthsRepository } from './auths.repository';
import { AuthsHelper } from './auths.helper';

@Module({
  controllers: [AuthsController],
  providers: [AuthsService, AuthsRepository, AuthsHelper],
  imports: [TypeOrmModule.forFeature([Users])],
  exports: [
    /* guard에서 사용(injection)하기 때문에 export */
    AuthsRepository,
    AuthsHelper,
  ],
})
export class AuthsModule {}
