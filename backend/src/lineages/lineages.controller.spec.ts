import { Test, TestingModule } from '@nestjs/testing';
import { LineagesController } from './lineages.controller';
import { LineagesService } from './lineages.service';

describe('LineagesController', () => {
  let controller: LineagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LineagesController],
      providers: [LineagesService],
    }).compile();

    controller = module.get<LineagesController>(LineagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
