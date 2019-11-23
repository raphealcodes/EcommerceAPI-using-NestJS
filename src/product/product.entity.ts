import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { OrderEntity } from '../order/order.entity';

@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @CreateDateColumn() created: Date;

    @Column('text') title: string;

    @Column('text') description: string;

    @Column('text') image: string;

    @Column('text') price: string;

    @ManyToOne(type => UserEntity, user => user.products)
     user: UserEntity;

     @ManyToOne(type => OrderEntity, orders => orders.products)
     orders: OrderEntity;

}
