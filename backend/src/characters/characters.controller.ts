import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CharacterEntity } from './entities/character.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('characters')
@ApiTags('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CharacterEntity })
  async create(@Body() CreateCharacterDto: CreateCharacterDto, @Request() req: any) {
    const user_id = +req?.user?.id;
    CreateCharacterDto.user_id = user_id;
    return new CharacterEntity(await this.charactersService.create(CreateCharacterDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type: CharacterEntity, isArray: true})
  async findAllByUser(@Request() req: any) {
    const user_id = +req?.user?.id;
    const characters = await this.charactersService.findAllByUser(user_id);
    return characters.map((character) => new CharacterEntity(character));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('id') id: number) {
    return new CharacterEntity (await this.charactersService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async update(@Param('id') id: number, @Body() UpdateCharacterDto: UpdateCharacterDto) {
    return new CharacterEntity (await this.charactersService.update(id, UpdateCharacterDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async remove(@Param('id') id: number) {
    return new CharacterEntity (await this.charactersService.remove(id));
  }
}
