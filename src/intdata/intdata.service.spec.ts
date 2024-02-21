import { Test, TestingModule } from '@nestjs/testing';
import { IntDataService } from './intdata.service';

describe('IntdataService', () => {
  let service: IntDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntDataService],
    }).compile();

    service = module.get<IntDataService>(IntDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
