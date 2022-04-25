import { Knex, knex } from 'knex';
import dotenv from 'dotenv';
import knexConn from '@src/config/database-connection';
import { INVALID_ENVIROMENT_VARIABLE } from '@src/constants/error';

/* jest timeout */
jest.setTimeout(10 * 1000);

/* jest mock database */
jest.mock('@src/config/database-connection');
const mockKnexConn = knexConn as jest.MockedFunction<typeof knexConn>;

dotenv.config();

const {
  DOCKER_DB_NAME,
  DOCKER_DB_USER,
  DOCKER_DB_HOST,
  DOCKER_DB_PORT,
  DOCKER_DB_PASSWORD,
} = process.env;

if (
  !DOCKER_DB_NAME ||
  !DOCKER_DB_USER ||
  !DOCKER_DB_HOST ||
  !DOCKER_DB_PORT ||
  !DOCKER_DB_PASSWORD
) {
  throw new Error(INVALID_ENVIROMENT_VARIABLE);
}

const config: Knex.Config = {
  client: 'pg',
  connection: {
    database: DOCKER_DB_NAME,
    user: DOCKER_DB_USER,
    host: DOCKER_DB_HOST,
    port: parseInt(DOCKER_DB_PORT, 10),
    password: DOCKER_DB_PASSWORD,
  },
};

const connection = knex(config);

// eslint-disable-next-line
let trx;

beforeAll(async () => {
  trx = await new Promise((resolve) => {
    connection.transaction((trx) => {
      mockKnexConn.mockImplementation(trx);
      resolve(trx);
    });
  });
});

afterAll(async () => {
  await trx.rollback();
});
