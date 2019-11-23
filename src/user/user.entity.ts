import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToMany, OneToOne, BeforeInsert } from 'typeorm';
import { ProductEntity } from '../product/product.entity';
import { OrderEntity } from '../order/order.entity';
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @CreateDateColumn() created: Date;

    @Column({type: 'text', unique: true}) username: string;

    @Column('text') password: string;

    @Column({type: 'boolean', default: false}) seller: boolean;

    @Column('text') addr1: string;

    @Column('text') addr2: string;

    @Column('text') city: string;

    @Column('text') state: string;

    @Column('text') country: string;

    @Column('text') zip: number;

   @BeforeInsert()
    async HashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async ComparePassword(attempt: string) {
     return await bcrypt.compare(this.password, attempt);
    }

    responseObject() {
        const {id, username, seller, created} = this;
        const toResponseObject: any = {id, username, created, seller};
        return toResponseObject;
    }

   @OneToMany(type => ProductEntity, products => products.user)
    products: ProductEntity[];

    @OneToMany(type => OrderEntity, orders => orders.user)
    orders: OrderEntity;
}
