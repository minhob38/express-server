import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthsService {
  async createUser(email: string, password: string) {
    console.log('service');

    const user = await this.findUserByEmail(email);

    if (!user) return;

    const hash = this.createHash(password);
    await this.saveUser(email, hash);
    const token = this.createToken(email);
  }

  // TODO: DB연동
  private async findUserByEmail(email: string) {
    return false;
  }

  private createHash(password: string) {
    return 'shdkjfhakjdhk';
  }

  private async saveUser(email: string, hash: string) {
    return 'user';
  }

  private createToken(email: string) {
    return 'token';
  }
}
