import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceCenterService {

    constructor(private http: HttpClient) {
    }

    getAllPriceList(params) {
        return this.http.get('/api/price-list-all?type=' + params);
    }

    getDevices(type: string) {
        return this.http.get('/api/price-list?type=' + type);
    }

    getPriceListById(id: string) {
        return this.http.get('/api/price-list/' + id);
    }
}
