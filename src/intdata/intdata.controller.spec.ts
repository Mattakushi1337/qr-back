import { Test, TestingModule } from '@nestjs/testing';
import { IntDataController } from './intdata.controller';

describe('IntdataController', () => {
  let controller: IntDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntDataController],
    }).compile();

    controller = module.get<IntDataController>(IntDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
