import { Mongoose } from 'mongoose';
import { WordSchema } from './schemas/word.schema';

export const wordProviders = [
  {
    provide: 'WORD_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('words', WordSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
