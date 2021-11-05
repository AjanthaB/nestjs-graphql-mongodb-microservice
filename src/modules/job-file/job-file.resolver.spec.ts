import { Test, TestingModule } from '@nestjs/testing';
import { JobFileResolver } from './job-file.resolver';

describe('JobFileResolver', () => {
  let resolver: JobFileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobFileResolver],
    }).compile();

    resolver = module.get<JobFileResolver>(JobFileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
