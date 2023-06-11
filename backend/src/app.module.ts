import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [PrismaModule, ActionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
