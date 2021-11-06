import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateJobFileInput } from './dto/create-job-file.input';
import { JobFileService } from './job-file.service';
import { JobFile } from './schemas/job-file.schema';

@Resolver(() => JobFile)
export class JobFileResolver {
  constructor(private jobFileService: JobFileService) {}

  @Query(() => JobFile)
  async jobFile(@Args('jobRefId') jobRefId: string) {
    return this.jobFileService.findByJobRefId(jobRefId);
  }

  @Mutation(() => JobFile)
  async createJobFile(
    @Args('createJobFileInput') createJobFile: CreateJobFileInput,
  ) {
    return this.jobFileService.create(createJobFile);
  }
}
