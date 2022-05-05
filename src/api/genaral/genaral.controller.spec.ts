import { Test, TestingModule } from '@nestjs/testing';
import { GenaralController } from './genaral.controller';
import { GenaralService } from './genaral.service';

describe('GenaralController', () => {
  let controller: GenaralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenaralController],
      providers: [GenaralService],
    }).compile();

    controller = module.get<GenaralController>(GenaralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
