import { Test, TestingModule } from '@nestjs/testing';
import { CatsServices } from './cats.services';

describe('CatsServices', () => {
  let service: CatsServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsServices],
    }).compile();

    service = module.get<CatsServices>(CatsServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
