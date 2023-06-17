import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CampaignsService {
  constructor(private prisma: PrismaService) {};

  create(createCampaignDto: CreateCampaignDto) {
    return this.prisma.campaign.create({data: createCampaignDto});
  }

  findAllByUser(user_id: number) {
    return this.prisma.campaign.findMany({where: {user_id}});
  }

  findOne(id: number) {
    return this.prisma.campaign.findUnique({where: {id}});
  }

  update(id: number, updateCampaignDto: UpdateCampaignDto) {
    return this.prisma.campaign.update({where: {id}, data: updateCampaignDto});
  }

  remove(id: number) {
    return this.prisma.campaign.delete({where: {id}});
  }
}
