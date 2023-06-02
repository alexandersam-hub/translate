import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { WordService } from './word.service';
import { IWord } from './schemas/word.schema';

@Controller('word')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Post()
  createWord(@Body() word: IWord) {
    return this.wordService.create(word);
  }
  @Get()
  getAllWord() {
    return this.wordService.findAll();
  }

  @Put()
  updateWord(@Body() word: IWord) {
    return this.wordService.update(word);
  }
}
