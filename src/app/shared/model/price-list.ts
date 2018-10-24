import {PriceListItem} from './price-list-item';

export class PriceList {
    constructor(_id, model, image, listImage, topItems, categories) {
        this._id = _id;
        this.model = model;
        this.image = image;
        this.listImage = listImage;
        this.topItems = topItems;
        this.categories = categories;
    }

    _id: string;
    model: string;
    image: string;
    listImage: string;
    topItems: PriceListItem[];
    categories: { name: string, items: PriceListItem[] }[];
}
