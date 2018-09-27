import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Message} from '../shared/model/message';

@Injectable()
export class StoreService {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get('/api/products');
    }

    getImg() {
        return this.http.get('/api/image');
    }
}
