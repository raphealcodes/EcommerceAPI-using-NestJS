import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { ProductEntity } from '../product/product.entity';

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @CreateDateColumn() created: Date;

    @Column({type: 'text', default: 0}) totalprice: number;

    @Column({type: 'text', default: 0}) quantity: number;

    @ManyToOne(type => UserEntity, user => user.orders)
    user: UserEntity;

    @OneToMany(type => ProductEntity, products => products.orders)
    products: ProductEntity[];
}
