import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthsRepository } from './auths.repository';
import { AuthsHelper } from './auths.helper';
import { IRes } from '../types/types';
@Injectable()
export class AuthsService {
  constructor(
    private readonly authsRepository: AuthsRepository,
    private readonly authHelper: AuthsHelper,
  ) {}
  // TODO: POST 201 code 200으로 바꾸기 : (
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

    return {
      status: 200,
      message: 'user signed up',
    };
  }

  async postSignin(email: string, password: string): Promise<IRes> {
    const user = await this.authsRepository.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException({
        status: 401,
        message: 'user does not exists',
      });
    }

    const hash: string = user.password;
    const isMatchPassword: boolean = await this.authHelper.getIsMatchPassword(
      password,
      hash,
    );

    if (!isMatchPassword) {
      throw new UnauthorizedException({
        status: 401,
        message: 'password is invalid',
      });
    }

    const token: string = this.authHelper.createToken(user.email);

    return {
      status: 200,
      message: 'user signed in',
      data: { access_token: token },
    };
  }
}
