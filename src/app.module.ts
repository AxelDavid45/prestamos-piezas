import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { LoggerModule } from 'nestjs-pino';
import { LoansModule } from './loans/loans.module';
import logger from './config/logger';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    LoggerModule.forRootAsync(logger),
    ConfigModule.forRoot(config),
    LoansModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
