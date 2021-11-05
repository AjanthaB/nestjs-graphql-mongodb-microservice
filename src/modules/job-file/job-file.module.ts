import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobFileController } from './job-file.controller';
import { JobFileResolver } from './job-file.resolver';
import { JobFileService } from './job-file.service';
import { JobFile, JobFileSchema } from './schemas/job-file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: JobFile.name, schema: JobFileSchema }]),
  ],
  providers: [JobFileService, JobFileResolver],
  controllers: [JobFileController],
})
export class JobFileModule {}
