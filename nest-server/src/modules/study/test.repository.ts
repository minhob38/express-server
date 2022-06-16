import { Injectable } from '@nestjs/common';

@Injectable()
export class TestRepository {
  funcRepo() {
    console.log('test repository : (');
  }
}
