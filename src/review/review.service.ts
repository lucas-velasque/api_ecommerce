import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService {
  private reviews: Review[] = [
    {
      id: 1,
      user_id: 1,
      restaurant_id: 1,
      comment: 'Comida muito boa!',
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  create(createReviewDto: CreateReviewDto) {
    const newReview = {
      ...createReviewDto,
      id: this.reviews.length + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.reviews.push(newReview);
    return newReview;
  }

  findAll() {
    return this.reviews;
  }

  findOne(id: number) {
    return this.reviews.find(review => review.id === id);
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    const index = this.reviews.findIndex(review => review.id === id);
    if (index >= 0) {
      this.reviews[index] = {
        ...this.reviews[index],
        ...updateReviewDto,
        updatedAt: new Date()
      };
      return this.reviews[index];
    }
    return null;
  }


  remove(id: number) {
    const index = this.reviews.findIndex(review => review.id === id);
    if (index >= 0) {
      const removed = this.reviews[index];
      this.reviews.splice(index, 1);
      return removed;
    }
    return null;
  }
}
