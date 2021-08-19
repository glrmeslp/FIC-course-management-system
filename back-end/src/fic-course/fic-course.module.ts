import { Module } from '@nestjs/common';
import { FicCourseService } from './fic-course.service';
import { FicCourseController } from './fic-course.controller';
import { FicCourse, FicCourseSchema } from './entities/fic-course.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FicCourse.name, schema: FicCourseSchema }])
  ],
  controllers: [FicCourseController],
  providers: [FicCourseService]
})

export class FicCourseModule {}
