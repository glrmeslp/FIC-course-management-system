import { Module } from '@nestjs/common';
import { FicStudentService } from './fic-student.service';
import { FicStudentController } from './fic-student.controller';

@Module({
  controllers: [FicStudentController],
  providers: [FicStudentService]
})
export class FicStudentModule {}
