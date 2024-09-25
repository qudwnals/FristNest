import { Test, TestingModule } from '@nestjs/testing';
import { PjController } from './pj.controller';

describe('PjController', () => {
  let controller: PjController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PjController],
    }).compile();

    controller = module.get<PjController>(PjController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
