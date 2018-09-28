import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {HttpClient} from '@angular/common/http';

// import {StoreServsice} from 'src/';

@Component({
    selector: 'app-admin-service',
    templateUrl: './admin-service.component.html',
    styleUrls: ['./admin-service.component.scss']
})
export class AdminServiceComponent implements OnInit {
    file: File = null;
    images = [];

    constructor(private storeService: StoreService,
                private http: HttpClient) {
    }

    ngOnInit() {
        this.storeService.getImg().subscribe((data: any) => {
            if (data.success) {
                this.images = data.data;
            }
        });
    }

    onFileSelected(event) {
        this.file = <File>event.target.files[0];
    }

    onUpload() {
        const fd = new FormData();
        fd.append('test', this.file, this.file.name);
        fd.append('name', 'store');
        this.http.post('/api/image', fd).subscribe((data) => {
            console.log(data);
        });
    }
}
