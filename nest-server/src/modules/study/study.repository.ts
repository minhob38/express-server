import { Injectable } from '@nestjs/common';

@Injectable()
export class StudyRepository {
  funcRepo() {
    console.log('study repository : (');
  }
}
