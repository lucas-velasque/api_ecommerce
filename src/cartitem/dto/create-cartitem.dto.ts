import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateCartitemDto {
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    product_id: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;
}
