import { registerAs } from '@nestjs/config'

export default registerAs('database', () => ({
    host: process.env.TEST_DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME
}))
