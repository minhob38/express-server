import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /* root path */
  getRoot(): string {
    return 'my nest server : )';
  }
}
