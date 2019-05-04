import { Product } from './product-model';

export class Shop {
    constructor(public name: string,
        public logo: string,
        public map: string,
        public description?: string,
        public products?: Product[],
        public addresses?: [string]) {

    }
}