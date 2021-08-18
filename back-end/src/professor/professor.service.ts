import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor,ProfessorDocument } from './entities/professor.entity';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';


@Injectable()
export class ProfessorService {

  constructor(@InjectModel(Professor.name) private professor_model: Model<ProfessorDocument>){
  }

  async create(createProfessorDto: CreateProfessorDto) {
    const professor = new this.professor_model(createProfessorDto);
    return professor.save();
  }

  async findAll():Promise<Professor[]> {
    return this.professor_model.find().exec();
  }

  async findOne(id: number):Promise<Professor[]>{
    return this.professor_model.findById(id).exec();
  }

  async update(id: number, updateProfessorDto: UpdateProfessorDto) {
    return this.professor_model.findByIdAndUpdate(id,updateProfessorDto);
  }

  async remove(id: number) {
    return this.professor_model.findByIdAndDelete(id).exec();

  }
}
