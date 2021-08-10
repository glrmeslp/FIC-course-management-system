
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export type FicCourseDocument = FicCourse & Document;

@Schema()
export class FicCourse {
    
    @Prop({ required: true })
    name_course: string;
    
}

export const FicCourseSchema = SchemaFactory.createForClass(FicCourse)
