import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DynamicService {
  constructor(@Inject('STUDY_CONFIG') private studyConfig) {}

  arr = [];

  push(item) {
    console.log(this.studyConfig);
    this.arr.push(item);
    console.log(this.arr);
  }
}
