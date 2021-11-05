import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobFileModule } from './modules';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './config/configuration';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
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
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      // debug: true,
      // playground: true,
    }),
    JobFileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
