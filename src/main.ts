import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { EnvVariables } from './config/schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bufferLogs: true,
  });
  const configService = app.get(ConfigService);
  const log = app.get(Logger);
  app.useLogger(log);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({ transform: true, errorHttpStatusCode: 422 }),
  );

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'v',
  });

  const appPort = configService.get(EnvVariables.APP_PORT);
  // const httpAdapter = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new BusinessExceptionFilter(httpAdapter));
  await app.listen(appPort, '0.0.0.0');
  const url = await app.getUrl();
  log.log(`Server is running at ${url}`);
}
bootstrap();
