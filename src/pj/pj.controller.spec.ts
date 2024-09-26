import { Test, TestingModule } from '@nestjs/testing';
import { PjController } from './pj.controller';
import {PjService} from "./pj.service";

describe('PjController', () => {
  let controller: PjController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PjController],
      providers: [PjService],
    }).compile();

    controller = module.get<PjController>(PjController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
