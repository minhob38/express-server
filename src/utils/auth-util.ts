import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { INVALID_ENVIROMENT_VARIABLE } from '../constants/error';

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

export const createToken = (email: string): string => {
  const token: string = jwt.sign({ email }, TOKEN_SECRET_KEY, { expiresIn: '14d' });

  return token;
};
