import { Injectable } from '@nestjs/common';
import { CreateFicStudentDto } from './dto/create-fic-student.dto';
import { UpdateFicStudentDto } from './dto/update-fic-student.dto';

@Injectable()
export class FicStudentService {
  create(createFicStudentDto: CreateFicStudentDto) {
    return 'This action adds a new ficStudent';
  }

  findAll() {
    return `This action returns all ficStudent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ficStudent`;
  }

  update(id: number, updateFicStudentDto: UpdateFicStudentDto) {
    return `This action updates a #${id} ficStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} ficStudent`;
  }
}
