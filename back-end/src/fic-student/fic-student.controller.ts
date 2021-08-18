import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { FicStudentService } from './fic-student.service';
import { CreateFicStudentDto } from './dto/create-fic-student.dto';
import { UpdateFicStudentDto } from './dto/update-fic-student.dto';

@Controller('fic-student')
export class FicStudentController {
  constructor(private readonly ficStudentService: FicStudentService) {}

  @Post()
  create(@Body() createFicStudentDto: CreateFicStudentDto) {
    return this.ficStudentService.create(createFicStudentDto);
  }

  @Get()
  findAll() {
    return this.ficStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ficStudentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFicStudentDto: UpdateFicStudentDto) {
    return this.ficStudentService.update(id, updateFicStudentDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficStudentService.remove(id);
  }
}
