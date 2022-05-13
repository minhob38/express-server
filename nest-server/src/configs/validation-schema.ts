import Joi from 'joi';

const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production').required(),

  DOCKER_DB_HOST: Joi.string().required(),
  DOCKER_DB_NAME: Joi.string().required(),
  DOCKER_DB_USER: Joi.string().required(),
  DOCKER_DB_PASSWORD: Joi.string().required(),
  DOCKER_DB_PORT: Joi.number().required(),

  TOKEN_SECRET_KEY: Joi.string().required(),
});

export default validationSchema;
