import { ProductEntity } from '../product/product.entity';
import { UserRO } from '../user/user.model';

export interface Products {
    product: ProductEntity;
    quantity: number;
}

export interface Orders {
    id: string;
    created: Date;
    products: Products[];
    totalprice: number;
    user: UserRO;
}
