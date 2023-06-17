import { Test, TestingModule } from '@nestjs/testing';
import { MovesetsController } from './movesets.controller';
import { MovesetsService } from './movesets.service';

describe('MovesetsController', () => {
  let controller: MovesetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovesetsController],
      providers: [MovesetsService],
    }).compile();

    controller = module.get<MovesetsController>(MovesetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
