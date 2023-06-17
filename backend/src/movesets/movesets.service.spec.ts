import { Test, TestingModule } from '@nestjs/testing';
import { MovesetsService } from './movesets.service';

describe('MovesetsService', () => {
  let service: MovesetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovesetsService],
    }).compile();

    service = module.get<MovesetsService>(MovesetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
