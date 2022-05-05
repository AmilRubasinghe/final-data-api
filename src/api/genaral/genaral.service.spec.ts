import { Test, TestingModule } from '@nestjs/testing';
import { GenaralService } from './genaral.service';

describe('GenaralService', () => {
  let service: GenaralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenaralService],
    }).compile();

    service = module.get<GenaralService>(GenaralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
