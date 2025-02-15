export class CreateReviewDto {
    id: number;
    user_id: number;
    restaurant_id: number;
    comment: string;
    rating: number;
}
