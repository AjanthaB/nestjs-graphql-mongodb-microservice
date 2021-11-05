import { Args, Query, Resolver } from '@nestjs/graphql';
import { JobFileService } from './job-file.service';
import { JobFile } from './schemas/job-file.schema';

@Resolver(() => JobFile)
export class JobFileResolver {
  constructor(private jobFileService: JobFileService) {}

  @Query(() => JobFile)
  async jobFile(@Args('jobRefId') jobRefId: string) {
    return this.jobFileService.findByJobRefId(jobRefId);
  }
}
