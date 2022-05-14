import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';
import { SeoulSggs } from '../../entities/seoul-ssgs.entity';
import { MapsRepository } from './maps.repository';
@Module({
  providers: [MapsService, MapsRepository],
  controllers: [MapsController],
  imports: [TypeOrmModule.forFeature([SeoulSggs])],
})
export class MapsModule {}
