import { Module } from '@nestjs/common';
import { StudyService } from './study.service';
import { StudyRepository } from './study.repository';
import { StudyController } from './study.controller';

const mockStudyService = {
  func: () => console.log('study service (useValue)'),
};

const aliasStudyService = {
  provide: 'AliasStudyService',
  useExisting: StudyService,
};

@Module({
  providers: [
    {
      provide: StudyService,
      useClass: StudyService,
      // useValue: mockStudyService,
    },
    {
      provide: 'STUDY_REPOSITORY',
      useClass: StudyRepository,
    },
    aliasStudyService,
  ],
  controllers: [StudyController],
})
export class StudyModule {}
