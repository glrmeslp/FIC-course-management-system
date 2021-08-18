import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FicCourseService } from './fic-course.service';
import { CreateFicCourseDto } from './dto/create-fic-course.dto';
import { UpdateFicCourseDto } from './dto/update-fic-course.dto';

@Controller('api/fic-course')
export class FicCourseController {
  constructor(private readonly ficCourseService: FicCourseService) {}

  @Post()
  create(@Body() createFicCourseDto: CreateFicCourseDto) {
    return this.ficCourseService.create(createFicCourseDto);
  }

  @Get()
  findAll() {
    return this.ficCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ficCourseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFicCourseDto: UpdateFicCourseDto) {
    return this.ficCourseService.update(id, updateFicCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficCourseService.remove(id);
  }
}
