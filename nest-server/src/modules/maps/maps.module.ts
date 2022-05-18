import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';
import { SeoulSggs } from '../../entities/seoul-ssgs.entity';
import { MapsRepository } from './maps.repository';
import { LoggerModule } from 'src/logger/logger.module';
@Module({
  providers: [MapsService, MapsRepository, Logger],
  controllers: [MapsController],
  imports: [TypeOrmModule.forFeature([SeoulSggs]), LoggerModule],
})
export class MapsModule {}
