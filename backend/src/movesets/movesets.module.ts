import { Module } from '@nestjs/common';
import { MovesetsService } from './movesets.service';
import { MovesetsController } from './movesets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MovesetsController],
  providers: [MovesetsService],
  imports: [PrismaModule],
  exports: [MovesetsService]
})
export class MovesetsModule {}
