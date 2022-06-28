import { Module } from '@nestjs/common';
import { SchedulersService } from './schedulers.service';

@Module({
  providers: [SchedulersService],
})
export class SchedulersModule {}
