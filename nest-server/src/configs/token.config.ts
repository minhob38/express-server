import { registerAs } from '@nestjs/config';

export default registerAs('token', () => ({
  tokenSecretKey: process.env.TOKEN_SECRET_KEY,
}));
