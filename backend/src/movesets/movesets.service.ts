import { Injectable } from '@nestjs/common';
import { CreateMovesetDto } from './dto/create-moveset.dto';
import { UpdateMovesetDto } from './dto/update-moveset.dto';

@Injectable()
export class MovesetsService {
  create(createMovesetDto: CreateMovesetDto) {
    return 'This action adds a new moveset';
  }

  findAll() {
    return `This action returns all movesets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moveset`;
  }

  update(id: number, updateMovesetDto: UpdateMovesetDto) {
    return `This action updates a #${id} moveset`;
  }

  remove(id: number) {
    return `This action removes a #${id} moveset`;
  }
}
