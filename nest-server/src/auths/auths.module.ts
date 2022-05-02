import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { AuthsService } from './auths.service';
import { Users } from './../repo/users.entity';

@Module({
  controllers: [AuthsController],
  providers: [AuthsService],
  imports: [TypeOrmModule.forFeature([Users])],
})
export class AuthsModule {}
