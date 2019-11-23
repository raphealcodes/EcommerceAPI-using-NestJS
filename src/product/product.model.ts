import { UserRO } from '../user/user.model';
import { Orders } from '../order/order.model';
export interface ProductDTO {
    title: string;
    description: string;
    image: string;
    price: string;

}

export interface ProductRO {
    title: string;
    description: string;
    image: string;
    price: string;
    id: string;
    created: Date;
    user: UserRO;
    orders: Orders;

}
