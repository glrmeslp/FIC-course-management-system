import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class, ClassDocument } from './schemas/class.schema';

@Injectable()
export class ClassesService {

  constructor(@InjectModel(Class.name) private classModel: Model<ClassDocument>,
  @InjectConnection() private connection: Connection) {
    connection.set('useFindAndModify', false);
  }


  async create(createClassDto: CreateClassDto): Promise<Class> {
    const createdClass = new this.classModel(createClassDto);
    return createdClass.save()
  }

  async findAll(): Promise<Class[]> {
    return this.classModel.find().exec();
  }

  async findOne(id: string): Promise<Class> {
    return this.classModel.findById(id).exec();
  }

  update(id: string, updateClassDto: UpdateClassDto) {
    const updatedClass = new this.classModel(updateClassDto);
    return this.classModel.findByIdAndUpdate(id,{ $set : {updatedClass}});
  }

  remove(id: string) {
    return this.classModel.findByIdAndDelete(id).exec();
  }
}
