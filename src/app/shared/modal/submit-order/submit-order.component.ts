import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Product} from '../../model/product';
import {SessionStorageService} from '../../../services/session-storage.service';
import {OrderService} from '../../../services/order.service';

@Component({
    selector: 'app-submit-order',
    templateUrl: './submit-order.component.html',
    styleUrls: ['./submit-order.component.scss']
})
export class SubmitOrderComponent implements OnInit {
    name: string;
    number: number;

    constructor(private dialogRef: MatDialogRef<SubmitOrderComponent>,
                @Inject(MAT_DIALOG_DATA) public products: Product[],
                private sessonStorageService: SessionStorageService,
                private orderService: OrderService) {
    }

    ngOnInit() {
        console.log(this.products);
    }

    submitClick() {
        this.dialogRef.close();
    }

    close(): void {
        this.dialogRef.close();
    }

    deleteFromStorage(id) {
        this.sessonStorageService.deleteFromShopingList(id);
        let index = this.products.findIndex(product => product._id === id);
        this.products.splice(index);
        if (this.products.length === 0) this.dialogRef.close();
    }

    submitOrder() {
        let order = {
            name: this.name,
            number: this.number,
            products: this.products
        };
        this.orderService.postOrder(order).subscribe((res: any) => {
            if (res.success) {
                this.sessonStorageService.clear();
                this.dialogRef.close();
            }
        });
    }

}
