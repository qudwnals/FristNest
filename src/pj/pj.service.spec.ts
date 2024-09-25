import { Test, TestingModule } from '@nestjs/testing';
import { PjService } from './pj.service';

describe('PjService', () => {
  let service: PjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PjService],
    }).compile();

    service = module.get<PjService>(PjService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
