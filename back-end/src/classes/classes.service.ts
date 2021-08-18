import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class, ClassDocument } from './schemas/class.schema';

@Injectable()
export class ClassesService {

  constructor(@InjectModel(Class.name) private classModel: Model<ClassDocument>) {
  }

  async create(createClassDto: CreateClassDto) {
    const newClass = new this.classModel({
      name: createClassDto.name,
      startDate: createClassDto.startDate,
      endDate: createClassDto.endDate,
      professor: createClassDto.professorId,
      ficCourse: createClassDto.ficCourseId
    });
    try {
      const createdClass = await newClass.save();
      return createdClass;
    } catch(error) {
      throw new InternalServerErrorException(error)
    }
  }

  async findAll() {
    let classes: Class[];
    try {
      classes = await this.classModel.find()
      .populate('ficCourse')
      .populate('professor')
      .exec();

      let response;
      if (classes.length > 0) {
        
        response = {
          ok: true,
          data: classes,
          message: 'Get classes ok!',
        }
      } else {
        response = {
            ok: true,
            data: [],
            message: 'No hay classes',
        };
      }
      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string): Promise<Class> {
    return this.classModel.findById(id).exec();
  }

  update(id: string, updateClassDto: UpdateClassDto) {
    return this.classModel.findByIdAndUpdate(id,updateClassDto,{"new":true});
  }

  remove(id: string) {
    return this.classModel.findByIdAndDelete(id).exec();
  }
}
