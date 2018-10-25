import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PriceList} from '../shared/model/price-list';

@Injectable()
export class AdminServiceCenterService {

    constructor(private http: HttpClient) {
    }

    addPriceList(image: File, listImage: File, priceList: PriceList) {
        const fd = new FormData();
        fd.append('priceList', JSON.stringify(priceList));
        fd.append('image', image);
        fd.append('listImage', listImage);

        return this.http.post('/api/price-list', fd, {
            reportProgress: true,
            observe: 'events'
        });
    }

    editPriceList(image: File, listImage: File, priceList: PriceList) {
        const fd = new FormData();
        fd.append('priceList', JSON.stringify(priceList));
        if (image) {
            fd.append('image', image);
        }
        if (listImage) {
            fd.append('listImage', listImage);
        }

        return this.http.put('/api/price-list/' + priceList._id, fd, {
            reportProgress: true,
            observe: 'events'
        });
    }
}
