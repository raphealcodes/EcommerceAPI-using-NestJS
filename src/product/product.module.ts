import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { UserEntity } from '../user/user.entity';
import { OrderEntity } from '../order/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, UserEntity, OrderEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
