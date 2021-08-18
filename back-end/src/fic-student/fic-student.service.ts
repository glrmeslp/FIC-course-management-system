import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFicStudentDto } from './dto/create-fic-student.dto';
import { UpdateFicStudentDto } from './dto/update-fic-student.dto';
import { FicStudent, FicStudentDocument } from './entities/fic-student.entity';

@Injectable()
export class FicStudentService {

  constructor(@InjectModel(FicStudent.name) private ficStudentModel: Model<FicStudentDocument>) {}

  async create(createFicStudentDto: CreateFicStudentDto): Promise<FicStudent> {
    const createdficStudent = new this.ficStudentModel(createFicStudentDto);
    return createdficStudent.save();
  }

  async findAll(): Promise<FicStudent[]> {
    return  this.ficStudentModel.find().exec();
  }

  async findOne(id: string):Promise<FicStudent> {
    return  this.ficStudentModel.findById(id).exec();
  }

  async update(id: string, updateFicStudentDto: UpdateFicStudentDto) {
    return  this.ficStudentModel.findByIdAndUpdate(id, updateFicStudentDto).exec();
  }

  async remove(id: string): Promise<FicStudent> {
    return  this.ficStudentModel.findByIdAndDelete(id).exec();
  }
}
