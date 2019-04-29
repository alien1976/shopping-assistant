export class Product {
    constructor(public name: string,
        public logo: string,
        public price: number,
        public coords: { x: number, y: number },
        public description?: string
    ) {

    }
}
