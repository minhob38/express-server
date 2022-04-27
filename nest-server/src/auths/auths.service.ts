import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthsService {
  async createUser(email: string, password: string) {
    console.log('service');
  }
}
