import { Injectable } from '@nestjs/common';
import { CreateMovesetDto } from './dto/create-moveset.dto';
import { UpdateMovesetDto } from './dto/update-moveset.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class MovesetsService {
  constructor(private prisma:  PrismaService) {};

  create(createMovesetDto: CreateMovesetDto) {
    return this.prisma.moveset.create({data: createMovesetDto});
  }

  findAll() {
    return this.prisma.moveset.findMany();
  }

  findOne(id: number) {
    return this.prisma.moveset.findUnique({where: {id}});
  }

  update(id: number, updateMovesetDto: UpdateMovesetDto) {
    return this.prisma.moveset.update({where: {id}, data: updateMovesetDto});
  }

  remove(id: number) {
    return this.prisma.moveset.delete({where: {id}});
  }
}
