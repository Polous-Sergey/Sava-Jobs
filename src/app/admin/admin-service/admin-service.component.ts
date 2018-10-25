import {AfterViewInit, Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Product} from '../../shared/model/product';
import {map, startWith, switchMap} from 'rxjs/internal/operators';
import {CardPrevievComponent} from '../../shared/modal/card-previev/card-previev.component';
import {CardDetailComponent} from '../../shared/modal/card-detail/card-detail.component';
import {ServiceCenterService} from '../../services/service-center.service';
import {PriceList} from '../../shared/model/price-list';
import {AddEditPriceListComponent} from '../../shared/modal/add-edit-price-list/add-edit-price-list.component';

@Component({
    selector: 'app-admin-service',
    templateUrl: './admin-service.component.html',
    styleUrls: ['./admin-service.component.scss']
})
export class AdminServiceComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = [
        'created',
        'model',
        'preview',
        'action'
    ];

    media;
    isLoadingResults = true;
    dataSource: MatTableDataSource<PriceList>;
    getProducts$: EventEmitter<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private serviceCenterService: ServiceCenterService,
                private dialog: MatDialog,
                private breakpointObserver: BreakpointObserver) {
        this.getProducts$ = new EventEmitter();
    }

    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 700px)'])
            .subscribe((state: BreakpointState) => {
                this.media = state.matches;
            });
    }

    ngAfterViewInit() {
        this.getProducts$
            .pipe(
                startWith({}),
                switchMap((params?) => {
                    this.isLoadingResults = true;
                    return this.serviceCenterService.getAllPriceList();
                }),
                map(data => {
                    this.isLoadingResults = false;
                    return data;
                })
            ).subscribe((res: any) => {
            if (!res.success) {
                this.dataSource = new MatTableDataSource([]);
                return console.error(res);
            }
            this.dataSource = new MatTableDataSource(res.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    // editProduct(product: Product) {
    //     console.log(product);
    // }

    deleteProduct(id: string) {
        console.log(id);
    }

    cardPreview(product: Product) {
        // console.log(product);
        // const confiq: any = {
        //     data: {...product}
        // };
        // const dialogRef = this.dialog.open(CardPrevievComponent, confiq);
        //
        // dialogRef.afterClosed().subscribe(result => {
        //     console.log(result);
        // });
    }

    detailPreview(product: Product) {
        // console.log(product);
        // const confiq: any = {
        //     maxWidth: '100%',
        //     width: this.media ? '90%' : '98%',
        //     height: this.media ? '80%' : '98%',
        //     data: {...product},
        //     panelClass: 'dialog-detail'
        // };
        // const dialogRef = this.dialog.open(CardDetailComponent, confiq);
        //
        // dialogRef.afterClosed().subscribe(result => {
        //     console.log(result);
        // });
    }

    addProduct() {
        const confiq: any = {
            maxWidth: '98%',
            maxHeight: '90vh',
            width: '750px',
            data: null
        };
        const dialogRef = this.dialog.open(AddEditPriceListComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log(result);
                this.getProducts$.emit();
            }
        });
    }

    editProduct(priceList: PriceList) {
        const confiq: any = {
            maxWidth: '98%',
            maxHeight: '90vh',
            width: '750px',
            data: {...priceList},
        };
        const dialogRef = this.dialog.open(AddEditPriceListComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log(result);
                this.getProducts$.emit();
            }
        });
    }
}

