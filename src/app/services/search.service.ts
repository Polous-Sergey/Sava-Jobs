import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) {
    }

    getSearchResult(filterValue: string) {
        return this.http.get('/api/search?filterValue=' + filterValue);
    }
}
