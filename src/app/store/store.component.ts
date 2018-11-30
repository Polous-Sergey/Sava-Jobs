import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CardDetailComponent} from '../shared/modal/card-detail/card-detail.component';
import {StoreService} from '../services/store.service';
import {SubmitOrderComponent} from '../shared/modal/submit-order/submit-order.component';
import {Product} from '../shared/model/product';
import {SessionStorageService} from '../services/session-storage.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  data: Product[] = [];
  shopingList: Product[] = [];

  constructor(private dialog: MatDialog,
              private storeService: StoreService,
              private sessonStorageService: SessionStorageService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.storeService.getAll().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.data = res.data;
        // this.showDetail(res.data[0]);
      }
    });
    this.shopingList = this.sessonStorageService.getShopingList();
  }

  showDetail(data: Product) {
    const confiq: any = {
      maxWidth: '98%',
      maxHeight: '90vh',
      width: '750px',
      height: '500px',
      data: {...data},
      panelClass: 'dialog-detail'
    };
    const dialogRef = this.dialog.open(CardDetailComponent, confiq);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  showOrderPage(data?: Product) {
    let index;
    if (data) index = this.shopingList.findIndex(item => item._id === data._id);
    if(index === -1) {
      this.shopingList.push(data);
      this.sessonStorageService.addToShopingList(data);
    }
    const confiq: any = {
      maxWidth: '98%',
      maxHeight: '90vh',
      width: '400px',
      data: this.shopingList
    };
    const dialogRef = this.dialog.open(SubmitOrderComponent, confiq);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
