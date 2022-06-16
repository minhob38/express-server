import { Module } from '@nestjs/common';
import { StudyService } from './study.service';
import { StudyRepository } from './study.repository';
import { StudyController } from './study.controller';
import { DynamicStudyModule } from './dynamic.module';
import { StudyScope } from './study.scope';
import { LazyModule } from './lazy.module';

const mockStudyService = {
  func: () => console.log('study service (useValue)'),
};

const aliasStudyService = {
  provide: 'ALIAS_STUDY_SERVICE',
  useExisting: StudyService,
};

const asyncProvider = {
  provide: 'ASYNC_PROVIDER',
  useFactory: async () => {
    let num = 0;
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('@@@');
        num = 3;
        resolve('resolve');
      }, 5000);
    });

    return {
      func: () => console.log(`async provider ${num}`),
    };
  },
};

@Module({
  imports: [DynamicStudyModule.register({ module: 'study :3' })],
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
    asyncProvider,
    StudyScope,
  ],
  controllers: [StudyController],
  exports: [StudyScope],
})
export class StudyModule {}
