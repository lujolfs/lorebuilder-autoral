import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ActionsService } from './actions.service';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { ActionEntity } from './entities/action.entity';

@Controller('actions')
@ApiTags('actions')
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}

  @Post()
  @ApiCreatedResponse({type: ActionEntity})
  create(@Body() createActionDto: CreateActionDto) {
    return this.actionsService.create(createActionDto);
  }

  @Get()
  @ApiOkResponse({type: ActionEntity, isArray: true})
  findAll() {
    return this.actionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: ActionEntity})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const action = await this.actionsService.findOne(id);
    if (!action) {
      throw new NotFoundException(`Action with ID ${id} does not exist.`);
    } 
    return action;
  }

  @Patch(':id')
  @ApiOkResponse({type: ActionEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateActionDto: UpdateActionDto) {
    return this.actionsService.update(id, updateActionDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: ActionEntity})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.actionsService.remove(id);
  }
}
