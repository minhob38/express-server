import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';
import { SeoulSggs } from '../../entities/seoul-ssgs.entity';
import { MapsRepository } from './maps.repository';

@Module({
  providers: [MapsService, MapsRepository, Logger],
  controllers: [MapsController],
  imports: [
    TypeOrmModule.forFeature([SeoulSggs]),
    BullModule.registerQueue({
      name: 'audio',
    }),
  ],
})
export class MapsModule {}
