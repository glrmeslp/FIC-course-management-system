import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type FicStudentDocument = FicStudent & Document;

@Schema()
export class FicStudent {
   
    @Prop({ required: true })

    name_student: string;

    @Prop({ required: true })

    registration_student: string;
}

export  const  FicStudentSchema  = SchemaFactory.createForClass(FicStudent)