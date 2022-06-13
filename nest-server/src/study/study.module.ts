import { Module } from '@nestjs/common';
import { StudyService } from './study.service';

@Module({
  providers: [StudyService]
})
export class StudyModule {}
