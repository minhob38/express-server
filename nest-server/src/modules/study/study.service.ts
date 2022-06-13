import { StudyRepository } from './study.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class StudyService {
  constructor(
    @Inject('STUDY_REPOSITORY') private studyRepository: StudyRepository,
  ) {}

  arr = [];

  func() {
    this.studyRepository.funcRepo();
    console.log('study service');
  }

  push(item) {
    this.arr.push(item);
    console.log(this.arr);
  }
}
