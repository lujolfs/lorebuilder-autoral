import { Injectable } from '@nestjs/common';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ActionsService {
  constructor(private prisma: PrismaService) {}
  
  create(createActionDto: CreateActionDto) {
    return this.prisma.action.create({ data: createActionDto });
  }

  findAll() {
    return this.prisma.action.findMany();
  }

  findOne(id: number) {
    return this.prisma.action.findUnique({where: { id }});
  }

  update(id: number, updateActionDto: UpdateActionDto) {
    return this.prisma.action.update({
      where: { id },
      data: updateActionDto,
    });
  }

  remove(id: number) {
    return this.prisma.action.delete({where: {id}});
  }
}