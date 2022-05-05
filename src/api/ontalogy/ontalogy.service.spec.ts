import { Test, TestingModule } from '@nestjs/testing';
import { OntalogyService } from './ontalogy.service';

describe('OntalogyService', () => {
  let service: OntalogyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OntalogyService],
    }).compile();

    service = module.get<OntalogyService>(OntalogyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
