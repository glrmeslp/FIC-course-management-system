import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesModule } from './classes/classes.module';
import { FicCourseModule } from './fic-course/fic-course.module';
import { FicStudentModule } from './fic-student/fic-student.module';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://mongodb:27017/FIC-course'
      }),
    }),
    ClassesModule,
    FicCourseModule,
    FicStudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
