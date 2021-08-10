import { Test, TestingModule } from '@nestjs/testing';
import { FicCourseController } from './fic-course.controller';
import { FicCourseService } from './fic-course.service';

describe('FicCourseController', () => {
  let controller: FicCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FicCourseController],
      providers: [FicCourseService],
    }).compile();

    controller = module.get<FicCourseController>(FicCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
