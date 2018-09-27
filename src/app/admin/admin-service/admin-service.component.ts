import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
// import {StoreServsice} from 'src/';

@Component({
    selector: 'app-admin-service',
    templateUrl: './admin-service.component.html',
    styleUrls: ['./admin-service.component.scss']
})
export class AdminServiceComponent implements OnInit {
    images = [];

    constructor(private storeService: StoreService) {
    }

    async ngOnInit() {
        this.storeService.getImg().subscribe((data: any) => {
            if (data.success) {
                this.images = data.data;
            }
        });

    }
}
