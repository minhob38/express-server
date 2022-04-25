import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { INVALID_ENVIROMENT_VARIABLE } from '../constants/error';
import { IJwtPayloadUserInfo } from '../types/types';

dotenv.config();

const { TOKEN_SECRET_KEY } = process.env;

if (!TOKEN_SECRET_KEY) {
  throw new Error(INVALID_ENVIROMENT_VARIABLE);
}

export const createHash = (password: string): string => {
  const salt: string = bcrypt.genSaltSync(10);
  const hash: string = bcrypt.hashSync(password, salt);

  return hash;
};

export const getIsMatchPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const isPassword = await bcrypt.compareSync(password, hash);

  return isPassword;
};

export const createToken = (email: string): string => {
  const token: string = jwt.sign({ email }, TOKEN_SECRET_KEY, {
    expiresIn: '14d',
  });

  return token;
};

export const decodeBearerToken = (bearerToken: string): IJwtPayloadUserInfo => {
  const token: string = bearerToken.split('Bearer ')[1];
  const decode: IJwtPayloadUserInfo = jwt.verify(
    token,
    TOKEN_SECRET_KEY
  ) as IJwtPayloadUserInfo;

  return decode;
};
