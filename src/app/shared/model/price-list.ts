import {PriceListItem} from './price-list-item';

export class Product {
    constructor() {
    }

    _id: string;
    model: string;
    image: string;
    listImage: string;
    topItems: PriceListItem[];
    categories: {name: string, items: PriceListItem}[];
}
