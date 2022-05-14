import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';
import { Users } from '../../entities/users.entity';
import { AuthsRepository } from './auths.repository';
import { AuthsHelper } from './auths.helper';

@Module({
  controllers: [AuthsController],
  providers: [AuthsService, AuthsRepository, AuthsHelper],
  imports: [TypeOrmModule.forFeature([Users])],
})
export class AuthsModule {}
