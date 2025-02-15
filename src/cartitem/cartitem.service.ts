import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCartitemDto } from './dto/create-cartitem.dto';
import { UpdateCartitemDto } from './dto/update-cartitem.dto';
import { Cartitem } from './entities/cartitem.entity';

@Injectable()
export class CartitemService {
  constructor(
    @InjectModel(Cartitem)
    private readonly cartitemModel: typeof Cartitem,
  ) {}

  async create(createCartitemDto: CreateCartitemDto) {
    // Corrigir o método create
    return this.cartitemModel.create({
      ...createCartitemDto
    });
  }

  async findAll(): Promise<Cartitem[]> {
    return this.cartitemModel.findAll();
  }

  async findOne(id: number): Promise<Cartitem| null> {
    return this.cartitemModel.findByPk(id);
  }

  async update(id: number, updateProductDto: UpdateCartitemDto): Promise<Cartitem | null> {
    const product = await this.findOne(id);
    if (product) {
      return product.update(updateProductDto);
    }
    return null;
  }

  async remove(id: number): Promise<boolean> {
    const product = await this.findOne(id);
    if (product) {
      await product.destroy();
      return true;
    }
    return false;
  }
}
