import { Module } from '@nestjs/common';
import { LineagesService } from './lineages.service';
import { LineagesController } from './lineages.controller';

@Module({
  controllers: [LineagesController],
  providers: [LineagesService]
})
export class LineagesModule {}
