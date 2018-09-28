import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Product} from '../../model/product';
import {AdminStoreService} from '../../../services/admin.store.service';
import {HttpEventType} from '@angular/common/http';

@Component({
    selector: 'app-add-edit-product',
    templateUrl: './add-edit-product.component.html',
    styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
    images: File[] = [];


    constructor(private dialogRef: MatDialogRef<AddEditProductComponent>,
                @Inject(MAT_DIALOG_DATA) private product: Product,
                private adminStoreService: AdminStoreService) {
    }

    ngOnInit() {
        this.product = new Product;
    }

    onFilesSelected(event) {
        for (const file of event.target.files) {
            this.images.push(file);
        }
    }

    submitClick() {
        this.adminStoreService.addProduct(this.images, this.product).subscribe((event) => {
            if (event.type === HttpEventType.UploadProgress) {
                console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
            } else if (event.type === HttpEventType.Response) {
                console.log(event);
            }
        });
    }

    closeClick(): void {
        this.dialogRef.close();
    }

}
