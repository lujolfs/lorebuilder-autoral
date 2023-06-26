import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ActionsModule } from './actions/actions.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { LineagesModule } from './lineages/lineages.module';
import { CharactersModule } from './characters/characters.module';
import { MovesetsModule } from './movesets/movesets.module';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot({isGlobal: true, envFilePath: ['.env', '.env.test']}), ActionsModule, UsersModule, AuthModule, SettingsModule, CampaignsModule, LineagesModule, CharactersModule, MovesetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
