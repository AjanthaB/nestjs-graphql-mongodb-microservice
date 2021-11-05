import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJobFileInput } from './dto/create-job-file.input';
import { UpdateJobFileInput } from './dto/update-job-file.input';
import { JobFile, JobFileDocument } from './schemas/job-file.schema';

@Injectable()
export class JobFileService {
  constructor(
    @InjectModel(JobFile.name) private jobFileModel: Model<JobFileDocument>,
  ) {}

  create(createJobFileInput: CreateJobFileInput): Promise<JobFile> {
    const jobFile = new this.jobFileModel(createJobFileInput);
    return this.jobFileModel.create(jobFile);
  }

  findAll() {
    return this.jobFileModel.find();
  }

  update(updateJobFileInput: UpdateJobFileInput) {
    // return this.jobFileModel.updateOne()
  }
}
