import { Test, TestingModule } from '@nestjs/testing';
import { FicCourseService } from './fic-course.service';

describe('FicCourseService', () => {
  let service: FicCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FicCourseService],
    }).compile();

    service = module.get<FicCourseService>(FicCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
