import { Test, TestingModule } from '@nestjs/testing';
import { PhiController } from './phi.controller';
import { PhiService } from './phi.service';

describe('PhiController', () => {
  let controller: PhiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhiController],
      providers: [PhiService],
    }).compile();

    controller = module.get<PhiController>(PhiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
