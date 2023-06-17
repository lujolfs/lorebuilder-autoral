import { PartialType } from '@nestjs/swagger';
import { CreateLineageDto } from './create-lineage.dto';

export class UpdateLineageDto extends PartialType(CreateLineageDto) {}
