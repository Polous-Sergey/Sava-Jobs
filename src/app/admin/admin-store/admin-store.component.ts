import {AfterViewInit, Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Product} from '../../shared/model/product';
import {StoreService} from '../../services/store.service';
import {map, startWith, switchMap} from 'rxjs/internal/operators';
import {CardPrevievComponent} from '../../shared/modal/card-previev/card-previev.component';
import {CardDetailComponent} from '../../shared/modal/card-detail/card-detail.component';

@Component({
    selector: 'app-admin-store',
    templateUrl: './admin-store.component.html',
    styleUrls: ['./admin-store.component.scss']
})

export class AdminStoreComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = [
        'created',
        'title',
        'price',
        'hidden',
        'preview',
        'action'
    ];

    media;
    isLoadingResults = true;
    dataSource: MatTableDataSource<Product>;
    getProducts$: EventEmitter<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private storeService: StoreService,
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
                    return this.storeService.getAll();
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

    editProduct(product: Product) {
        console.log(product);
    }

    deleteProduct(id: string) {
        console.log(id);
    }

    cardPreview(product: Product) {
        console.log(product);
        const confiq: any = {
            data: {...product}
        };
        const dialogRef = this.dialog.open(CardPrevievComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

    detailPreview(product: Product) {
        console.log(product);
        const confiq: any = {
            maxWidth: '100%',
            width: this.media ? '90%' : '98%',
            height: this.media ? '80%' : '98%',
            data: {...product},
            panelClass: 'dialog-detail'
        };
        const dialogRef = this.dialog.open(CardDetailComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

}
