import { PartialType } from '@nestjs/swagger';
import { CreateMovesetDto } from './create-moveset.dto';

export class UpdateMovesetDto extends PartialType(CreateMovesetDto) {}
