import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import tokenConfig from 'src/configs/token.config';
import { IJwtPayloadUserInfo } from '../types/types';
@Injectable()
export class AuthsHelper {
  constructor(
    @Inject(tokenConfig.KEY)
    private readonly tokenCfg: ConfigType<typeof tokenConfig>,
  ) {}

  createHash = (password: string): string => {
    const salt: string = bcrypt.genSaltSync(10);
    const hash: string = bcrypt.hashSync(password, salt);
    return hash;
  };

  async getIsMatchPassword(password: string, hash: string): Promise<boolean> {
    const isPassword = await bcrypt.compareSync(password, hash);

    return isPassword;
  }

  createToken(email: string): string {
    const token: string = jwt.sign({ email }, this.tokenCfg.tokenSecretKey, {
      expiresIn: '14d',
    });

    return token;
  }

  decodeBearerToken(bearerToken: string): IJwtPayloadUserInfo {
    const token: string = bearerToken.split('Bearer ')[1];
    const decode: IJwtPayloadUserInfo = jwt.verify(
      token,
      this.tokenCfg.tokenSecretKey,
    ) as IJwtPayloadUserInfo;

    return decode;
  }
}
