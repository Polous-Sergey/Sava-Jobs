import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../shared/model/product';

@Injectable()
export class AdminServiceCenterService {

    constructor(private http: HttpClient) {
    }

    // addProduct(images: File[], cover: File, product: Product) {
    //     const fd = new FormData();
    //     fd.append('product', JSON.stringify(product));
    //     fd.append('cover', cover);
    //     images.forEach((image: File) => {
    //         fd.append('images', image);
    //     });
    //
    //     return this.http.post('/api/products', fd, {
    //         reportProgress: true,
    //         observe: 'events'
    //     });
    // }

    // editProduct(images: File[], cover: File, imagesForDelete: string[], product: Product) {
    //     const fd = new FormData();
    //     fd.append('product', JSON.stringify(product));
    //     if (cover) {
    //         fd.append('cover', cover);
    //     }
    //     if (imagesForDelete.length > 0) {
    //         fd.append('imagesForDelete', JSON.stringify(imagesForDelete));
    //     }
    //     images.forEach((image: File) => {
    //         fd.append('images', image);
    //     });
    //
    //     return this.http.put('/api/products/' + product._id, fd, {
    //         reportProgress: true,
    //         observe: 'events'
    //     });
    // }
}
