import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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
    try {
      return await this.productModel.create({
        ...createProductDto,
      });
    } catch (error) {
      throw new BadRequestException('Não foi possível criar o produto');
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      return await this.productModel.findAll();
    } catch (error) {
      throw new BadRequestException('Erro ao buscar produtos');
    }
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productModel.findByPk(id);
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    try {
      await product.update(updateProductDto);
      return await this.findOne(id);
    } catch (error) {
      throw new BadRequestException('Não foi possível atualizar o produto');
    }
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    try {
      await product.destroy();
    } catch (error) {
      throw new BadRequestException('Não foi possível remover o produto');
    }
  }
}