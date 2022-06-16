import { TestRepository } from './test.repository';
import { Controller, Get, Inject } from '@nestjs/common';
import { StudyService } from './study.service';
import { DynamicService } from './dynamic.service';
import { IRes } from '../../types/types';
import { StudyScope } from './study.scope';
import { ModuleRef } from '@nestjs/core';

@Controller('api/test')
export class TestController {
  private testRepository;
  constructor(
    private readonly dynamicService: DynamicService,
    private readonly studyScope: StudyScope,
    private moduleRef: ModuleRef,
  ) {}

  onModuleInit() {
    this.testRepository = this.moduleRef.get(TestRepository);
  }

  @Get('dynamic-module')
  async getDynamicModule(): Promise<any> {
    this.dynamicService.push('dynamic-item');
    return 'study';
  }

  @Get('scope')
  async getScope(): Promise<any> {
    this.studyScope.push('scope-item');
    return 'study';
  }

  @Get('module-reference')
  async getModuleReference(): Promise<any> {
    this.testRepository.funcRepo();
    return 'study';
  }
}
