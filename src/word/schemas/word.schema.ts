import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface IWord {
  id?: string;
  word: string;
  translate: string;
  sentence: string;
  isActive: boolean;
}
@Schema({
  toJSON: {
    transform(doc, ret) {
      (ret.id = ret._id), delete ret._id;
      delete ret.__v;
    },
  },
})
export class Word implements IWord {
  id?: string;
  @Prop({ unique: true })
  word: string;
  @Prop()
  sentence: string;
  @Prop()
  translate: string;
  @Prop({ default: true })
  isActive: boolean;
}

export const WordSchema = SchemaFactory.createForClass(Word);
