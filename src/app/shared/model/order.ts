import {Product} from './product';

export class Order {
    constructor() {
    }

    _id: string;
    name: string;
    number: number;
    products: Product[];
    created: string;
}
