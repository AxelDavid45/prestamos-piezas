import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { LoggerModule } from 'nestjs-pino';
import { LoansModule } from './loans/loans.module';
import logger from './config/logger';

@Module({
  imports: [LoggerModule.forRootAsync(logger), ConfigModule.forRoot(config), LoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
