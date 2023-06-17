import { Module } from '@nestjs/common';
import { MovesetsService } from './movesets.service';
import { MovesetsController } from './movesets.controller';

@Module({
  controllers: [MovesetsController],
  providers: [MovesetsService]
})
export class MovesetsModule {}
