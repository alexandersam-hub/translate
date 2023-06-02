import { Mongoose } from 'mongoose';
import { UserSchema } from './shcemas/user.schema';

export const UserProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
