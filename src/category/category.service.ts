import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  private category = [
    {
      id: 1,
      name: 'Eletrônicos',
      description: 'Categoria para produtos eletrônicos',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  create(createCategoryDto: CreateCategoryDto) {
    const newCategory = {
      ...createCategoryDto,
      id: this.category.length + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.category.push(newCategory)
    return newCategory;
  }

  findAll() {
    return this.category;
  }

  findOne(id: number) {
    return this.category.find(category => category.id == id);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const index = this.category.findIndex(category => category.id === id );
    if (index >= 0){
      this.category[index] = {
        ...this.category[index],
        ...updateCategoryDto,
        updatedAt: new Date()
      };
      return this.category[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.category.findIndex(category => category.id === id);
    if (index >= 0) {
      const removed = this.category[index];
      this.category.splice(index, 1);
      return removed;
    }
    return null;
  }
}
