import { Product } from './product-model';
import { Shop } from './shops-model';

export class User {
    constructor(public name: string,
        public email: string,
        public password: string,
        public id: string,
        public isAdmin: boolean = false,
        public favoriteProducts: { shopName: string, products: Product[] }[] = [],
        public favoriteShops: Shop[] = []
    ) {

    }
}