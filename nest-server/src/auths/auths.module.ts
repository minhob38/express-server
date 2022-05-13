import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';
import { Users } from './../repo/users.entity';
import { AuthsRepository } from './auths.repository';

@Module({
  controllers: [AuthsController],
  providers: [AuthsService, AuthsRepository],
  imports: [TypeOrmModule.forFeature([Users])],
})
export class AuthsModule {}
