import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { IWord } from './schemas/word.schema';

@Injectable()
export class WordService {
  constructor(@Inject('WORD_MODEL') private readonly wordModel: Model<IWord>) {}

  async create(word: IWord): Promise<IWord> {
    if (await this.wordModel.findOne({ word: word.word }))
      throw new BadRequestException('Слово уже существует');
    return this.wordModel.create(word);
  }
  async findAll(): Promise<IWord[]> {
    return this.wordModel.find().exec();
  }

  async update(word: IWord): Promise<IWord> {
    await this.wordModel.findByIdAndUpdate(word.id, word);
    return word;
  }
}
