import { Module } from '@nestjs/common';
import { LineagesService } from './lineages.service';
import { LineagesController } from './lineages.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LineagesController],
  providers: [LineagesService],
  imports: [PrismaModule],
  exports: [LineagesService]
})
export class LineagesModule {}
