import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovesetsService } from './movesets.service';
import { CreateMovesetDto } from './dto/create-moveset.dto';
import { UpdateMovesetDto } from './dto/update-moveset.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('movesets')
@ApiTags('movesets')
export class MovesetsController {
  constructor(private readonly movesetsService: MovesetsService) {}

  @Post()
  create(@Body() createMovesetDto: CreateMovesetDto) {
    return this.movesetsService.create(createMovesetDto);
  }

  @Get()
  findAll() {
    return this.movesetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movesetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovesetDto: UpdateMovesetDto) {
    return this.movesetsService.update(+id, updateMovesetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movesetsService.remove(+id);
  }
}
