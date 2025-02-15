import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
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

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'api_ecommerce',
      autoLoadModels: true,
      synchronize: true,
    }),
    AddressModule, CartitemModule, CategoryModule, OrderModule, OrderitemModule, ProductModule, ReviewModule, TrackingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
