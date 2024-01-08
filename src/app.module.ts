import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { LoggerModule } from 'nestjs-pino';
import logger from './config/logger';

@Module({
  imports: [LoggerModule.forRootAsync(logger), ConfigModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
