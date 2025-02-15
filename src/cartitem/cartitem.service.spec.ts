import { Test, TestingModule } from '@nestjs/testing';
import { CartitemService } from './cartitem.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cartitem } from './entities/cartitem.entity';

describe('CartitemService', () => {
  let service: CartitemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SequelizeModule.forFeature([Cartitem])],
      providers: [CartitemService],
    }).compile();

    service = module.get<CartitemService>(CartitemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});