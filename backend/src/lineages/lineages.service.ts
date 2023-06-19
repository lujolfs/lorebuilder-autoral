import { Injectable } from '@nestjs/common';
import { CreateLineageDto } from './dto/create-lineage.dto';
import { UpdateLineageDto } from './dto/update-lineage.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LineagesService {
  constructor(private prisma:  PrismaService) {};

  create(CreateLineageDto: CreateLineageDto) {
    return this.prisma.lineage.create({data: CreateLineageDto});
  }

  findAll() {
    return this.prisma.lineage.findMany();
  }

  findOne(id: number) {
    return this.prisma.setting.findUnique({where: {id}});
  }

  update(id: number, UpdateLineageDto: UpdateLineageDto) {
    return this.prisma.setting.update({where: {id}, data: UpdateLineageDto});
  }

  remove(id: number) {
    return this.prisma.setting.delete({where: {id}});
  }
}