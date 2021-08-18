import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProfessorDocument = Professor & Document;

@Schema()
export class Professor {
    
    @Prop({ required: true })
    name_professor: string;
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor)