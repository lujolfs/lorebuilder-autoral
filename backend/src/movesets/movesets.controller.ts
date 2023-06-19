import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { MovesetsService } from './movesets.service';
import { CreateMovesetDto } from './dto/create-moveset.dto';
import { UpdateMovesetDto } from './dto/update-moveset.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MovesetEntity } from './entities/moveset.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('movesets')
@ApiTags('movesets')
export class MovesetsController {
  constructor(private readonly movesetsService: MovesetsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: MovesetEntity })
  async create(@Body() CreateMovesetDto: CreateMovesetDto, @Request() req: any) {
    return new MovesetEntity(await this.movesetsService.create(CreateMovesetDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type: MovesetEntity, isArray: true})
  async findAll(@Request() req: any) {
    const movesets = await this.movesetsService.findAll();
    return movesets.map((moveset) => new MovesetEntity(moveset));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('id') id: number) {
    return new MovesetEntity (await this.movesetsService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async update(@Param('id') id: number, @Body() UpdateMovesetDto: UpdateMovesetDto) {
    return new MovesetEntity (await this.movesetsService.update(id, UpdateMovesetDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async remove(@Param('id') id: number) {
    return new MovesetEntity (await this.movesetsService.remove(id));
  }
}
