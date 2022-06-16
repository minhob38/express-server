import { DynamicModule, Module } from '@nestjs/common';
import { DynamicService } from './dynamic.service';

@Module({})
export class DynamicStudyModule {
  static register(studyConfig): DynamicModule {
    return {
      module: DynamicStudyModule,
      providers: [
        {
          provide: 'STUDY_CONFIG',
          useValue: studyConfig,
        },
        DynamicService,
      ],
      exports: [DynamicService],
    };
  }
}
