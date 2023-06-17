import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [CampaignsController],
  providers: [CampaignsService],
  imports: [PrismaModule],
  exports: [CampaignsService]
})
export class CampaignsModule {}
