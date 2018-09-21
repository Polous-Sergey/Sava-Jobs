import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CardDetailComponent} from '../shared/modal/card-detail/card-detail.component';
import {StoreService} from '../services/store.service';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
    data = [];

    constructor(private dialog: MatDialog,
                private storeService: StoreService) {
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.storeService.getAll().subscribe((res: any) => {
            console.log(res);
            if (res.succes) {
                this.data = res.data;
                this.showDetail(res.data[0]);
            }
        });
    }

    showDetail(data) {
        const confiq: any = {
            maxWidth: '100%',
            width: '90%',
            height: '80%',
            data: {...data}
        };
        const dialogRef = this.dialog.open(CardDetailComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

}
