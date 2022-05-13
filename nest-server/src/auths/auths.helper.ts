import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IJwtPayloadUserInfo } from '../types/types';

export class AuthsHelper {
  static createHash = (password: string): string => {
    const salt: string = bcrypt.genSaltSync(10);
    const hash: string = bcrypt.hashSync(password, salt);

    return hash;
  };

  static getIsMatchPassword = async (
    password: string,
    hash: string,
  ): Promise<boolean> => {
    const isPassword = await bcrypt.compareSync(password, hash);

    return isPassword;
  };

  static createToken = (email: string): string => {
    const token: string = jwt.sign({ email }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: '14d',
    });

    return token;
  };

  static decodeBearerToken = (bearerToken: string): IJwtPayloadUserInfo => {
    const token: string = bearerToken.split('Bearer ')[1];
    const decode: IJwtPayloadUserInfo = jwt.verify(
      token,
      process.env.TOKEN_SECRET_KEY,
    ) as IJwtPayloadUserInfo;

    return decode;
  };
}
