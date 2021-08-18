import { PartialType } from '@nestjs/mapped-types';
import { CreateFicStudentDto } from './create-fic-student.dto';

export class UpdateFicStudentDto extends PartialType(CreateFicStudentDto) {}
