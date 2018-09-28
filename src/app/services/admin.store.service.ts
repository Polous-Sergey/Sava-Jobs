import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../shared/model/product';

@Injectable()
export class AdminStoreService {

    constructor(private http: HttpClient) {
    }

    addProduct(images: File[], product: Product) {
        let fd = new FormData();
        fd.append('product', JSON.stringify(product));
        images.forEach((image: File) => {
            fd.append('images', image);
        });

        return this.http.post('/api/products', fd, {
            reportProgress: true,
            observe: 'events'
        });
    }
}
