import * as Joi from 'joi';

export const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'local')
    .default('development'),
  APP_PORT: Joi.number().default(9000),
  DATABASE_URI: Joi.string().required(),
  LOG_LEVEL: Joi.string().default('info'),
});
