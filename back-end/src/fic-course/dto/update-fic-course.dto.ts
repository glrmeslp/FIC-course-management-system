import { PartialType } from '@nestjs/mapped-types';
import { CreateFicCourseDto } from './create-fic-course.dto';

export class UpdateFicCourseDto extends PartialType(CreateFicCourseDto) {}
