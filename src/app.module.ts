import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobFileModule } from './job-file/job-file.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:NfaRSp7qgoePF8EO@cluster0.vhqhk.mongodb.net/sample_airbnb?retryWrites=true&w=majority',
    ),
    JobFileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
