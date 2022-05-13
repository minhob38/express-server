import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { AuthsRepository } from './auths.repository';
import { IRes } from '../types/types';
import { AuthsHelper } from './auths.helper';
@Injectable()
export class AuthsService {
  constructor(
    private readonly authsRepository: AuthsRepository,
    private readonly authHelper: AuthsHelper,
  ) {}

  async postSignup(email: string, password: string): Promise<IRes> {
    const user = await this.authsRepository.findUserByEmail(email);
    if (user) {
      // TODO: exception에 type 정의 ? : (
      throw new BadRequestException({
        status: 400,
        message: 'user already exists',
      });
    }

    const hash = this.authHelper.createHash(password);
    await this.authsRepository.createUser(email, hash);
    const token = this.authHelper.createToken(email);

    return {
      status: 200,
      message: 'user signed up',
      data: { access_token: token },
    };
  }
}
