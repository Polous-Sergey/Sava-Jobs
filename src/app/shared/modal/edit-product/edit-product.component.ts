import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Product} from '../../model/product';
import {AdminStoreService} from '../../../services/admin.store.service';
import {HttpEventType} from '@angular/common/http';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {Lightbox} from '@ngx-gallery/lightbox';

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class EditProductComponent implements OnInit {

    items: GalleryItem[] = [];
    images: File[] = [];
    cover: File;


    constructor(private dialogRef: MatDialogRef<EditProductComponent>,
                @Inject(MAT_DIALOG_DATA) private product: Product,
                private adminStoreService: AdminStoreService,
                public gallery: Gallery, public lightbox: Lightbox) {
    }

    ngOnInit() {
        console.log(this.product);
        this.product.images.forEach((image) => {
            this.items.push(new ImageItem({src: '/api/image/' + image, thumb: '/api/image/' + image}));
        });
        console.log(this.items);
        this.gallery.ref('lightbox').load(this.items);
    }

    // onFilesSelected(event) {
    //     for (const file of event.target.files) {
    //         this.images.push(file);
    //     }
    // }
    //
    // onCoverSelected(event) {
    //     this.cover = event.target.files[0];
    // }

    submitClick() {
        this.adminStoreService.editProduct(this.images, this.cover, this.product).subscribe((event) => {
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

    deleteImage(image: string) {
        this.adminStoreService.deleteImage(image).subscribe((res) => {
            if (res.success) {
                console.log(res);
            } else {
                console.log(res);
            }
        });
    }
}
