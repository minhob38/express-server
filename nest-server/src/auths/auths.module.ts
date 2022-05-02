import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';
import { UsersEntity } from './../repo/users.entity';

@Module({
  controllers: [AuthsController],
  providers: [AuthsService],
  imports: [TypeOrmModule.forFeature([UsersEntity])],
})
export class AuthsModule {}
