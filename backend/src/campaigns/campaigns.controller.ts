import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CampaignEntity } from './entities/campaign.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('campaigns')
@ApiTags('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CampaignEntity })
  async create(@Body() createCampaignDto: CreateCampaignDto, @Request() req: any) {
    const user_id = +req?.user?.id;
    createCampaignDto.user_id = user_id;
    return new CampaignEntity(await this.campaignsService.create(createCampaignDto));  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type: CampaignEntity, isArray: true})
  async findAllByUser(@Request() req: any) {
    const user_id = +req?.user?.id;
    const campaigns = await this.campaignsService.findAllByUser(user_id);
    return campaigns.map((campaign) => new CampaignEntity(campaign));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('id') id: number) {
    return new CampaignEntity (await this.campaignsService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async update(@Param('id') id: number, @Body() updateCampaignDto: UpdateCampaignDto) {
    return new CampaignEntity(await this.campaignsService.update(id, updateCampaignDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async remove(@Param('id') id: number) {
    return new CampaignEntity (await this.campaignsService.remove(id));
  }
}
