import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { CartitemModule } from './cartitem/cartitem.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { OrderitemModule } from './orderitem/orderitem.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { TrackingModule } from './tracking/tracking.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AddressModule, CartitemModule, CategoryModule, OrderModule, OrderitemModule, ProductModule, ReviewModule, TrackingModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
