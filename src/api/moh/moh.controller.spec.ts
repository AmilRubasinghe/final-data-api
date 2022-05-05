import { Test, TestingModule } from '@nestjs/testing';
import { MohController } from './moh.controller';
import { MohService } from './moh.service';

describe('MohController', () => {
  let controller: MohController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MohController],
      providers: [MohService],
    }).compile();

    controller = module.get<MohController>(MohController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
