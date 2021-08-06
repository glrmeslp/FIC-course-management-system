
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId})
  teacher: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId})
  ficCourse: string;
}

export const ClassSchema = SchemaFactory.createForClass(Class);