import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUser } from './shcemas/user.schema';

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<IUser>) {}

  async createUser(user: IUser) {
    return this.userModel.create(user);
  }

  // async login() {}
}
