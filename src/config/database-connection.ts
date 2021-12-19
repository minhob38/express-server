import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const {
  DOCKER_DB_NAME,
  DOCKER_DB_USER,
  DOCKER_DB_HOST,
  DOCKER_DB_PORT,
  DOCKER_DB_PASSWORD,
} = process.env;

if (!DOCKER_DB_NAME
  || !DOCKER_DB_USER
  || !DOCKER_DB_HOST
  || !DOCKER_DB_PORT
  || !DOCKER_DB_PASSWORD
) {
  throw new Error('environment variable error');
}

const config = {
  client: 'pg',
  connection: {
    database: DOCKER_DB_NAME,
    user: DOCKER_DB_USER,
    host: DOCKER_DB_HOST,
    port: DOCKER_DB_PORT,
    password: DOCKER_DB_PASSWORD,
  },
};

const connection = knex(config);

export default connection;
