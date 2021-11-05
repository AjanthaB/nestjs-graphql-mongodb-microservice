import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateJobFileInput } from './dto/create-job-file.input';
import { JobFileService } from './job-file.service';

@Controller('/api/v1/job-files')
export class JobFileController {
  constructor(public jobFileService: JobFileService) {}

  @Post('')
  create(@Body() createJobFileInput: CreateJobFileInput) {
    return this.jobFileService.create(createJobFileInput);
  }

  @Get('')
  getAll() {
    return this.jobFileService.findAll();
  }

  @Get(':id')
  getByJobRefId(@Param() jobRefId: string) {
    return this.jobFileService.findByJobRefId(jobRefId);
  }
}
