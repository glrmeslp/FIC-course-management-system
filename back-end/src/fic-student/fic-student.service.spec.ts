import { Test, TestingModule } from '@nestjs/testing';
import { FicStudentService } from './fic-student.service';

describe('FicStudentService', () => {
  let service: FicStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FicStudentService],
    }).compile();

    service = module.get<FicStudentService>(FicStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
