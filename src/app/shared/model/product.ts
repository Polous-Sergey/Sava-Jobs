export class Product {
    constructor() {
    }

    _id: string;
    title: string;
    price: number;
    shortDescription: string;
    description: string;
    conditions: { name: string; condition: number }[];
    images: string[];
    category: string[];
    totalRating: number;
    equipment: string[];
    created: Date;
    createdBy: string;
    hidden: boolean;
    isSold: boolean;
}
