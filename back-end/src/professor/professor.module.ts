import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { Professor, ProfessorSchema } from './entities/professor.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Professor.name, schema: ProfessorSchema }])
  ],
  controllers: [ProfessorController],
  providers: [ProfessorService]
})
export class ProfessorModule {}
