import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SettingEntity } from './entities/setting.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('settings')
@ApiTags('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SettingEntity })
  async create(@Body() createSettingDto: CreateSettingDto, @Request() req: any) {
    const user_id = +req?.user?.id;
    createSettingDto.user_id = user_id;
    return new SettingEntity(await this.settingsService.create(createSettingDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type: SettingEntity, isArray: true})
  async findAllByUser(@Request() req: any) {
    const user_id = +req?.user?.id;
    const settings = await this.settingsService.findAllByUser(user_id);
    return settings.map((setting) => new SettingEntity(setting));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('id') id: number) {
    return new SettingEntity (await this.settingsService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async update(@Param('id') id: number, @Body() updateSettingDto: UpdateSettingDto) {
    return new SettingEntity (await this.settingsService.update(id, updateSettingDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async remove(@Param('id') id: number) {
    return new SettingEntity (await this.settingsService.remove(id));
  }
}
