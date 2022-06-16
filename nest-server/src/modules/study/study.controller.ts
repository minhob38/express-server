import { StudyScope } from './study.scope';
import { Controller, Get, Inject } from '@nestjs/common';
import { StudyService } from './study.service';
import { DynamicService } from './dynamic.service';
import { IRes } from '../../types/types';

@Controller('api/study')
export class StudyController {
  constructor(
    private readonly studyService: StudyService,
    @Inject('ALIAS_STUDY_SERVICE') private readonly aliasStudyService,
    @Inject('ASYNC_PROVIDER') private readonly asyncProvider,
    private readonly dynamicService: DynamicService,
    private readonly studyScope: StudyScope,
  ) {}

  @Get('custom-provider')
  async getCustomProvider(): Promise<any> {
    this.studyService.push('item');
    this.aliasStudyService.push('alias-item');
    this.studyService.func();
    return 'custom-provider';
  }

  @Get('async-provider')
  async getAsyncProvider(): Promise<any> {
    this.asyncProvider.func();
    return 'async-provider';
  }

  @Get('dynamic-module')
  async getDynamicModule(): Promise<any> {
    this.dynamicService.push('dynamic-item');
    return 'dynamic-module';
  }

  @Get('scope')
  async getScope(): Promise<any> {
    this.studyScope.push('scope-item');
    return 'scope';
  }

  @Get('lazy')
  async getLazy(): Promise<any> {
    await this.studyService.lazy();
    return 'scope';
  }
}
