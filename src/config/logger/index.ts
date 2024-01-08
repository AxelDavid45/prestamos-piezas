import { ConfigService } from '@nestjs/config';
import { EnvVariables } from '../schema';

export default {
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return {
      pinoHttp: {
        level: configService.get(EnvVariables.LOG_LEVEL),
        transport:
          configService.get(EnvVariables.NODE_ENV) === 'local'
            ? { target: 'pino-pretty' }
            : undefined,
      },
    };
  },
};
