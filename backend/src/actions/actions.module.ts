import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ActionsController } from './actions.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ActionsController],
  providers: [ActionsService],
  imports: [PrismaModule],
})
export class ActionsModule {}
