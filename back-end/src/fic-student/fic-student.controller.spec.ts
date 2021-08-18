import { Test, TestingModule } from '@nestjs/testing';
import { FicStudentController } from './fic-student.controller';
import { FicStudentService } from './fic-student.service';

describe('FicStudentController', () => {
  let controller: FicStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FicStudentController],
      providers: [FicStudentService],
    }).compile();

    controller = module.get<FicStudentController>(FicStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
