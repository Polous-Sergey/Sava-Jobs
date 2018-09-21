import {Component, Inject, OnInit} from '@angular/core';
import {GalleryItem, ImageItem} from '@ngx-gallery/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

    images = [
        new ImageItem({
            src: 'https://cdn.pixabay.com/photo/2017/12/06/20/23/glasses-3002608_960_720.jpg',
            thumb: 'https://cdn.pixabay.com/photo/2017/12/06/20/23/glasses-3002608_960_720.jpg'
        }),
        new ImageItem({
            src: 'https://cdn.pixabay.com/photo/2017/09/11/17/00/girl-2739669_960_720.jpg',
            thumb: 'https://cdn.pixabay.com/photo/2017/09/11/17/00/girl-2739669_960_720.jpg'
        }),
        new ImageItem({
            src: 'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg',
            thumb: 'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg'
        }),
        new ImageItem({
            src: 'https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg',
            thumb: 'https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg'
        })
    ];

    constructor(private dialogRef: MatDialogRef<CardDetailComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any) {
    }

    ngOnInit() {
        console.log(this.data);
    }

    submitClick() {
        this.dialogRef.close();
    }

    closeClick(): void {
        this.dialogRef.close();
    }

}
