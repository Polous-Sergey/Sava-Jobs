import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Product} from '../../shared/model/product';
import {StoreService} from '../../services/store.service';
import {OrderService} from '../../services/order.service';
import {Order} from '../../shared/model/order';
import {DetailOrderComponent} from '../../shared/modal/detail-order/detail-order.component';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
    orders: Order[];
    isLoadingResults = true;
    dataSource: MatTableDataSource<Order>;
    getProducts$: EventEmitter<any>;

    displayedColumns: string[] = [
        'created',
        'name',
        'number',
        'action'
    ];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private orderService: OrderService,
                private storeService: StoreService,
                private dialog: MatDialog) {
        this.getProducts$ = new EventEmitter();
    }

    ngOnInit() {
        this.orderService.getOrders().subscribe((res: any) => {
            if (res.success) {
                this.orders = res.data;
                this.dataSource = new MatTableDataSource(res.data);
                this.isLoadingResults = false;
            }
        });
    }

    applyFilter(filterValue: string) {
        console.log(this.dataSource.filter);
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deleteOrder(id: string) {
        console.log(id);
    }


    showOrderDetail(order: Order) {
        const confiq: any = {
            maxWidth: '98%',
            maxHeight: '90vh',
            width: '750px',
            data: {...order},
        };
        this.dialog.open(DetailOrderComponent, confiq);
    }

}
