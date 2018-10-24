import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceCenterService {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get('/api/price-list');
    }
}
