import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordService } from './word.service';
import { DatabaseModule } from '../database/database.module';
import { wordProviders } from './word.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [WordController],
  providers: [WordService, ...wordProviders],
})
export class WordModule {}
