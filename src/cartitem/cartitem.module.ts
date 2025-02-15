import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartitemService } from './cartitem.service';
import { CartitemController } from './cartitem.controller';
import { Cartitem } from './entities/cartitem.entity';

@Module({
  imports: [SequelizeModule.forFeature([Cartitem])], // Esta linha estava faltando
  controllers: [CartitemController],
  providers: [CartitemService],
})
export class CartitemModule {}