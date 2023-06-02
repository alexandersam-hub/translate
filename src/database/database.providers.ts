import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      return await mongoose.connect(
        'mongodb://translate:3836563@94.154.11.200:27017/translate?authMechanism=DEFAULT',
      );
    },
  },
];
