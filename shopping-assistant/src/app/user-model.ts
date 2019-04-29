import { Product } from './product-model';
import { Shop } from './shops-model';

export class User {
    constructor(public name: string,
        public email: string,
        public password: string,
        public isAdmin?: boolean,
        public favoriteProducts?: Product[],
        public favoriteShops?: Shop[]
    ) {

    }
}