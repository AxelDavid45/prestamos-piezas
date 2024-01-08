import { configSchema } from './schema/validation';

export default {
  isGlobal: true,
  validationSchema: configSchema,
  validationOptions: {
    stripUnknown: true,
    abortEarly: true,
  },
};
