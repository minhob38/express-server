import { Module } from '@nestjs/common';
import { StudyService } from './study.service';
import { StudyController } from './study.controller';

@Module({
  providers: [
    {
      provide: StudyService,
      useValue: StudyService,
    },
  ],
  controllers: [StudyController],
})
export class StudyModule {}
