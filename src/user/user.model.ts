import { OrderEntity } from '../order/order.entity';
import { ProductEntity } from '../product/product.entity';

export interface Address {
    addr1: string;
    addr2: string;
    city: string;
    state: string;
    country: string;
    zip: number;

}

export interface UserDTO {
    username: string;
    password: string;
    addr1: string;
    addr2: string;
    city: string;
     state: string;
     country: string;
      zip: number;
}

export interface UserRO {
    id: string;
    created: Date;
    username: string;
    seller?: boolean;
    addr1: string;
    addr2: string;
    city: string;
     state: string;
     country: string;
      zip: number;
}
