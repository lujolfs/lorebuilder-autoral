import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineagesService } from './lineages.service';
import { CreateLineageDto } from './dto/create-lineage.dto';
import { UpdateLineageDto } from './dto/update-lineage.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('lineages')
@ApiTags('lineages')
export class LineagesController {
  constructor(private readonly lineagesService: LineagesService) {}

  @Post()
  create(@Body() createLineageDto: CreateLineageDto) {
    return this.lineagesService.create(createLineageDto);
  }

  @Get()
  findAll() {
    return this.lineagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lineagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLineageDto: UpdateLineageDto) {
    return this.lineagesService.update(+id, updateLineageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lineagesService.remove(+id);
  }
}
