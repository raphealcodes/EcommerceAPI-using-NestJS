import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { ProductEntity } from '../product/product.entity';
import { OrderEntity } from '../order/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ProductEntity, OrderEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
