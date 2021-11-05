import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobFileModule } from './job-file/job-file.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database.uri'),
      }),
      inject: [ConfigService],
    }),

    JobFileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
