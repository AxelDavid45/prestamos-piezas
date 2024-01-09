import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvVariables } from '../config/schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get(EnvVariables.DATABASE_URI),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
