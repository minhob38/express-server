import { LazyModule } from './lazy.module';
import { StudyRepository } from './study.repository';
import { Inject, Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { LazyService } from './lazy.service';

@Injectable()
export class StudyService {
  constructor(
    @Inject('STUDY_REPOSITORY') private studyRepository: StudyRepository,
    private lazyModuleLoader: LazyModuleLoader,
  ) {}

  lazyService: LazyService;
  arr = [];

  func() {
    this.studyRepository.funcRepo();
    console.log('study service');
  }

  push(item) {
    this.arr.push(item);
    console.log(this.arr);
  }

  async lazy() {
    console.log('before lazy load');
    const t1 = Date.now();
    console.time('a');
    const { LazyModule } = await import('./lazy.module');
    const moduleRef = await this.lazyModuleLoader.load(() => LazyModule);
    console.log('after lazy load');
    const t2 = Date.now();
    console.log('time', t2 - t1);

    console.timeEnd('a');
    const { LazyService } = await import('./lazy.service');
    this.lazyService = moduleRef.get(LazyService);
    this.lazyService.func();
  }
}
