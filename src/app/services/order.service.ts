import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrderService {

    constructor(private http: HttpClient) {
    }

    getOrders() {
        return this.http.get('/api/order');
    }

    postOrder(order: any) {
        return this.http.post('/api/order', order);
    }
}
