import { Knex, knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const {
  DOCKER_DB_NAME,
  DOCKER_DB_USER,
  DOCKER_DB_HOST,
  DOCKER_DB_PORT,
  DOCKER_DB_PASSWORD,
} = process.env;

const config: Knex.Config = {
  client: 'pg',
  connection: {
    database: DOCKER_DB_NAME,
    user: DOCKER_DB_USER,
    host: DOCKER_DB_HOST,
    port: parseInt(DOCKER_DB_PORT as string, 10),
    password: DOCKER_DB_PASSWORD,
  },
};

const connection = knex(config);

export default connection;
