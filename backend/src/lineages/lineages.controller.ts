import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { LineagesService } from './lineages.service';
import { CreateLineageDto } from './dto/create-lineage.dto';
import { UpdateLineageDto } from './dto/update-lineage.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LineageEntity } from './entities/lineage.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('lineages')
@ApiTags('lineages')
export class LineagesController {
  constructor(private readonly lineagesService: LineagesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: LineageEntity })
  async create(@Body() CreateLineageDto: CreateLineageDto) {
    return new LineageEntity(await this.lineagesService.create(CreateLineageDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type: LineageEntity, isArray: true})
  async findAll() {
    const lineages = await this.lineagesService.findAll();
    return lineages.map((lineage) => new LineageEntity(lineage));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('id') id: number) {
    return new LineageEntity (await this.lineagesService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async update(@Param('id') id: number, @Body() UpdateLineageDto: UpdateLineageDto) {
    return new LineageEntity (await this.lineagesService.update(id, UpdateLineageDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async remove(@Param('id') id: number) {
    return new LineageEntity (await this.lineagesService.remove(id));
  }
}
