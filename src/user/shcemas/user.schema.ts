import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export interface IUser {
  id?: string;
  login: string;
  password: string;
}

@Schema({
  toJSON: {
    transform(doc, ret) {
      (ret.id = ret._id), delete ret._id;
      delete ret.passwrod;
      delete ret.__v;
    },
  },
})
export class User implements IUser {
  id: string;
  @Prop({ unique: true })
  login: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)