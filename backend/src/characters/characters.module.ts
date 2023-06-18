import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService],
  imports: [PrismaModule],
  exports: [CharactersService]
})
export class CharactersModule {}
