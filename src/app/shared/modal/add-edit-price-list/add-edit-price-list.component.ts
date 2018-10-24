import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {HttpEventType} from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import {PriceList} from '../../model/price-list';
import {AdminServiceCenterService} from '../../../services/admin-service-center.service';
import {PriceListItem} from '../../model/price-list-item';
import {AddEditPriceListItemComponent} from '../add-edit-price-list-item/add-edit-price-list-item.component';
import {AddEditPriceListCategoryComponent} from '../add-edit-price-list-category/add-edit-price-list-category.component';

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

    constructor(private dialogRef: MatDialogRef<AddEditPriceListComponent>,
                @Inject(MAT_DIALOG_DATA) private priceList: PriceList,
                private adminServiceCenterService: AdminServiceCenterService,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        if (!this.priceList) {
            this.priceList = new PriceList(null, '', '', '', [], []);
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
        // this.adminStoreService.editProduct(this.images, this.cover, this.imagesForDelete, this.product).subscribe((event: any) => {
        //     if (event.type === HttpEventType.UploadProgress) {
        //         console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
        //     } else if (event.type === HttpEventType.Response) {
        //         console.log(event);
        //         if (event.body.success) {
        //             this.dialogRef.close(event.body.data);
        //         }
        //     }
        // });
    }

    closeClick(): void {
        this.dialogRef.close();
    }

    // deletePreviewImage(previewImageIndex: number) {
    //     this.previewImages.splice(previewImageIndex, 1);
    //     this.images.splice(previewImageIndex, 1);
    // }
    //
    // deleteImage(imageIndex: number, image: string) {
    //     this.imagesForDelete.push(image);
    //     this.product.images.splice(imageIndex, 1);
    // }

    addEditPriceListItem(categoryIndex: number, priceListItem?: PriceListItem) {
        const confiq: any = {
            maxWidth: '98%',
            maxHeight: '90vh',
            width: '320px',
            data: priceListItem ? {...priceListItem} : null
        };
        const dialogRef = this.dialog.open(AddEditPriceListItemComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.priceList.categories[categoryIndex].items.push(result);
            }
        });
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
}
