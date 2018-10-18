import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Product} from '../../model/product';
import {AdminStoreService} from '../../../services/admin.store.service';
import {HttpEventType} from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

    images: File[] = [];
    previewImages: string[] = [];
    cover: File = null;
    previewCower: string = null;
    imagesForDelete: string[] = [];

    constructor(private dialogRef: MatDialogRef<EditProductComponent>,
                @Inject(MAT_DIALOG_DATA) private product: Product,
                private adminStoreService: AdminStoreService) {
    }

    ngOnInit() {
    }

    onFilesSelected(event) {
        for (const file of event.target.files) {
            const reader = new FileReader();
            reader.onload = () => this.previewImages.push(reader.result);
            reader.readAsDataURL(file);
            this.images.push(file);
        }
    }

    onCoverSelected(event) {
        const reader = new FileReader();
        reader.onload = () => this.previewCower = reader.result;
        reader.readAsDataURL(event.target.files[0]);
        this.cover = event.target.files[0];
    }

    submitClick() {
        this.adminStoreService.editProduct(this.images, this.cover, this.imagesForDelete, this.product).subscribe((event: any) => {
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

    deletePreviewImage(previewImageIndex: number) {
        this.previewImages.splice(previewImageIndex, 1);
        this.images.splice(previewImageIndex, 1);
    }

    deleteImage(imageIndex: number, image: string) {
        this.imagesForDelete.push(image);
        this.product.images.splice(imageIndex, 1);
    }
}
