import { Test, TestingModule } from '@nestjs/testing';
import { MohService } from './moh.service';

describe('MohService', () => {
  let service: MohService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MohService],
    }).compile();

    service = module.get<MohService>(MohService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
