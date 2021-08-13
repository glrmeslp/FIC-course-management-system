import { Injectable } from '@nestjs/common';
import { CreateFicCourseDto } from './dto/create-fic-course.dto';
import { UpdateFicCourseDto } from './dto/update-fic-course.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { FicCourse, FicCourseDocument } from './entities/fic-course.entity';


@Injectable()
export class FicCourseService {

  constructor(@InjectModel(FicCourse.name) private fic_course_model: Model<FicCourseDocument>){
    
  }
  
  async create(createFicCourseDto: CreateFicCourseDto):Promise<FicCourse> {
    const fic_course = new this.fic_course_model(createFicCourseDto);

    return fic_course.save();
  }

  async findAll():Promise<FicCourse[]> {

    return this.fic_course_model.find().exec();
  }

  async findOne(id: string):Promise<FicCourse> {
    return this.fic_course_model.findById(id).exec();
  }

  async update(id: string, updateFicCourseDto: UpdateFicCourseDto) {
    return this.fic_course_model.findByIdAndUpdate(id,updateFicCourseDto);
  }

  remove(id: string):Promise<FicCourse> {
    return this.fic_course_model.findByIdAndDelete(id).exec();
  }
}
