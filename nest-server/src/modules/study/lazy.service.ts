import { StudyRepository } from './study.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class LazyService {
  // constructor() {}

  func() {
    console.log('lazy service');
  }
}
