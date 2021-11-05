import { Test, TestingModule } from '@nestjs/testing';
import { JobFileService } from './job-file.service';

describe('JobFileService', () => {
  let service: JobFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobFileService],
    }).compile();

    service = module.get<JobFileService>(JobFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
