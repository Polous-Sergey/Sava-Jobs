import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {CardDetailComponent} from '../shared/modal/card-detail/card-detail.component';
import {StoreService} from '../services/store.service';
import {SubmitOrderComponent} from '../shared/modal/submit-order/submit-order.component';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
    data = [];
    media;

    constructor(private dialog: MatDialog,
                private breakpointObserver: BreakpointObserver,
                private storeService: StoreService) {
    }

    ngOnInit() {
        this.getAll();
        this.breakpointObserver
            .observe(['(min-width: 700px)'])
            .subscribe((state: BreakpointState) => {
                this.media = state.matches;
            });
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
            width: this.media ? '90%' : '98%',
            height: this.media ? '80%' : '98%',
            data: {...data},
            panelClass: 'dialog-detail'
        };
        const dialogRef = this.dialog.open(CardDetailComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

    showOrderPage(data) {
        const confiq: any = {
            maxWidth: '100%',
            width: '90%',
            height: '80%',
            data: {...data},
            panelClass: 'dialog-detail'
        };
        const dialogRef = this.dialog.open(SubmitOrderComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

}
