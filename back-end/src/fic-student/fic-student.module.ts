import { Module } from '@nestjs/common';
import { FicStudentService } from './fic-student.service';
import { FicStudentController } from './fic-student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FicStudent, FicStudentSchema } from './entities/fic-student.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: FicStudent.name, schema: FicStudentSchema}])],
  controllers: [FicStudentController],
  providers: [FicStudentService]
})
export class FicStudentModule {}
