import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const checkEnv = (): void => {
  const schema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').required(),

    DOCKER_DB_HOST: Joi.string().required(),
    DOCKER_DB_NAME: Joi.string().required(),
    DOCKER_DB_USER: Joi.string().required(),
    DOCKER_DB_PASSWORD: Joi.string().required(),
    DOCKER_DB_PORT: Joi.number().required(),

    TOKEN_SECRET_KEY: Joi.string().required(),
  });

  const { error, value } = schema.validate(process.env, {
    allowUnknown: true,
    abortEarly: true,
  });

  if (error) throw new Error(error.message);
  return console.log('valid environment variables(.env)');
};

export default checkEnv;
