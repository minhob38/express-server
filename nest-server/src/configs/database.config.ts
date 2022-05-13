import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.TESDOCKER_DB_HOSTT_DB_HOST,
  port: parseInt(process.env.DOCKER_DB_PORT, 10),
  username: process.env.DOCKER_DB_USER,
  password: process.env.DOCKER_DB_PASSWORD,
  database: process.env.DOCKER_DB_NAME,
}));
