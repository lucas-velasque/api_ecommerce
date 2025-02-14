import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  create(createCategoryDto: CreateCategoryDto) {
    const newCategory = {
      ...createCategoryDto,
      id: this.category.length + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.category.push(newService)
    return newCategory;
  }

  findAll() {
    return this.category;
  }

  findOne(id: number) {
    return this.category.find(category => adress.id == id);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const index = this.category.findIndex(category => category.id === id );
    if (index >= 0){
      this.category[index] = {
        ...this.category[index],
        ...updateCategoryDto,
        updateAt: new Date()
      };
    return this.category[index];
  }
  return null;

  remove(id: number) {
    const index = this.category.findIndex(category => category.id === id);
    if (index >= 0) {
      const removed = this.addresses[index];
      this.addresses.splice(index, 1);
      return removed;
    }
    return null;
  }
}
