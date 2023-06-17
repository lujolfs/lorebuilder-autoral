import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private prisma:  PrismaService) {};

  create(createSettingDto: CreateSettingDto) {
    return this.prisma.setting.create({data: createSettingDto});
  }

  findAllByUser(user_id) {
    return this.prisma.setting.findMany({where: {user_id}});
  }

  findOne(id: number) {
    return this.prisma.setting.findUnique({where: {id}});
  }

  update(id: number, updateSettingDto: UpdateSettingDto) {
    return this.prisma.setting.update({where: {id}, data: updateSettingDto});
  }

  remove(id: number) {
    return this.prisma.setting.delete({where: {id}});
  }
}
