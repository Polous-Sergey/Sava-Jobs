import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {PriceList} from '../../model/price-list';
import {AdminServiceCenterService} from '../../../services/admin-service-center.service';
import {PriceListItem} from '../../model/price-list-item';
import {AddEditPriceListItemComponent} from '../add-edit-price-list-item/add-edit-price-list-item.component';
import {AddEditPriceListCategoryComponent} from '../add-edit-price-list-category/add-edit-price-list-category.component';
import {HttpEventType} from '@angular/common/http';

@Component({
    selector: 'app-add-edit-price-list',
    templateUrl: './add-edit-price-list.component.html',
    styleUrls: ['./add-edit-price-list.component.scss']
})
export class AddEditPriceListComponent implements OnInit {
    image: File = null;
    listImage: File = null;
    previewImage: string = null;
    previewlistImage: string = null;
    imagesForDelete: string[] = [];
    edit: boolean;

    constructor(private dialogRef: MatDialogRef<AddEditPriceListComponent>,
                @Inject(MAT_DIALOG_DATA) private priceList: PriceList,
                private adminServiceCenterService: AdminServiceCenterService,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        if (!this.priceList) {
            this.edit = false;
            this.priceList = new PriceList(null, '', '', '', [], []);
        } else {
            this.edit = true;
            this.previewImage = '/api/image/' + this.priceList.image;
            this.previewlistImage = '/api/image/' + this.priceList.listImage;
        }
    }

    onImageSelected(event) {
        const reader = new FileReader();
        reader.onload = () => this.previewImage = reader.result;
        reader.readAsDataURL(event.target.files[0]);
        this.image = event.target.files[0];
    }

    onListImageSelected(event) {
        const reader = new FileReader();
        reader.onload = () => this.previewlistImage = reader.result;
        reader.readAsDataURL(event.target.files[0]);
        this.listImage = event.target.files[0];
    }

    submitClick() {
        if (this.edit) {
            return this.adminServiceCenterService.editPriceList(this.image, this.listImage, this.priceList).subscribe((event: any) => {
                if (event.type === HttpEventType.UploadProgress) {
                    console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
                } else if (event.type === HttpEventType.Response) {
                    console.log(event);
                    if (event.body.success) {
                        this.dialogRef.close(event.body.data);
                    }
                }
            });
        }
        this.adminServiceCenterService.addPriceList(this.image, this.listImage, this.priceList).subscribe((event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
                console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
            } else if (event.type === HttpEventType.Response) {
                console.log(event);
                if (event.body.success) {
                    this.dialogRef.close(event.body.data);
                }
            }
        });
    }

    closeClick(): void {
        this.dialogRef.close();
    }

    addEditPriceListItem(categoryIndex: number, itemIndex?: number) {
        let data;
        if (categoryIndex === -1) {
            data = this.priceList.topItems;
        } else {
            data = this.priceList.categories[categoryIndex].items;
        }

        const confiq: any = {
            maxWidth: '98%',
            maxHeight: '90vh',
            width: '320px',
            data: itemIndex || itemIndex === 0 ? {...data[itemIndex]} : null
        };
        const dialogRef = this.dialog.open(AddEditPriceListItemComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (itemIndex || itemIndex === 0) {
                    return data[itemIndex] = result;
                }
                data.push(result);
            }
        });
    }

    deletePriceListItem(categoryIndex: number, itemIndex: number) {
        if (categoryIndex === -1) {
            this.priceList.topItems.splice(itemIndex, 1);
        } else {
            this.priceList.categories[categoryIndex].items.splice(itemIndex, 1);
        }
    }

    addEditPriceListCategory(categoryIndex?: number) {
        const confiq: any = {
            maxWidth: '98%',
            maxHeight: '90vh',
            width: '320px',
            data: categoryIndex || categoryIndex === 0 ? this.priceList.categories[categoryIndex].name : null
        };
        const dialogRef = this.dialog.open(AddEditPriceListCategoryComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (categoryIndex || categoryIndex === 0) {
                    return this.priceList.categories[categoryIndex].name = result;
                }
                this.priceList.categories.push({
                    name: result,
                    items: []
                });
            }
        });
    }

    deletePriceListCategory(categoryIndex: number) {
        this.priceList.categories.splice(categoryIndex, 1)
    }
}
