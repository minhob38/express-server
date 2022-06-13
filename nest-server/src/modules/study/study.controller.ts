import { Controller, Get, Inject } from '@nestjs/common';
import { StudyService } from './study.service';
import { IRes } from '../../types/types';

@Controller('api/study')
export class StudyController {
  constructor(
    private readonly studyService: StudyService,
    @Inject('AliasStudyService') private readonly aliasStudyService,
  ) {}

  @Get('custom-provider')
  async getCustomProvier(): Promise<any> {
    this.studyService.push('item');
    this.aliasStudyService.push('alias-item');
    this.studyService.func();
    return 'study';
  }
}
