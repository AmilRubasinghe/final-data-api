import { Test, TestingModule } from '@nestjs/testing';
import { OntalogyController } from './ontalogy.controller';
import { OntalogyService } from './ontalogy.service';

describe('OntalogyController', () => {
  let controller: OntalogyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OntalogyController],
      providers: [OntalogyService],
    }).compile();

    controller = module.get<OntalogyController>(OntalogyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
