import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceCenterService {

    constructor(private http: HttpClient) {
    }

    getAllPriceList() {
        return this.http.get('/api/price-list-all');
    }

    getIphonePriceList() {
        return this.http.get('/api/price-list');
    }

    getPriceListById(id: string) {
        return this.http.get('/api/price-list/' + id);
    }
}
