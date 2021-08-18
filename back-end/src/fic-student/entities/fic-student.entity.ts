import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type FicStudentDocument = FicStudent & Document;

@Schema()
export class FicStudent {
    @Prop({ required: true })

    name: string;

    @Prop({ required: true })

    matricula: string;
}

export  const  CatSchema  = SchemaFactory.createForClass(FicStudent);