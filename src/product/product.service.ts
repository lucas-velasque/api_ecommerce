import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productModel.create({
      ...createProductDto,
      category_id: createProductDto.categoryId
    });
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productModel.findByPk(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product | null> {
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