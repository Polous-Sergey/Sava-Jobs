import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../model/order';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<DetailOrderComponent>,
                @Inject(MAT_DIALOG_DATA) public order: Order,
                private orderService: OrderService) {
    }

    ngOnInit() {
        console.log(this.order);
    }
}

