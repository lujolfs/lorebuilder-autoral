import { Injectable } from '@nestjs/common';
import { CreateLineageDto } from './dto/create-lineage.dto';
import { UpdateLineageDto } from './dto/update-lineage.dto';

@Injectable()
export class LineagesService {
  create(createLineageDto: CreateLineageDto) {
    return 'This action adds a new lineage';
  }

  findAll() {
    return `This action returns all lineages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineage`;
  }

  update(id: number, updateLineageDto: UpdateLineageDto) {
    return `This action updates a #${id} lineage`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineage`;
  }
}
