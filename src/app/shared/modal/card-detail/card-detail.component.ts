import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {GalleryItem, ImageItem} from '@ngx-gallery/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CardDetailComponent implements OnInit {
    media;

    images = [
        new ImageItem({
            src: '../../../../assets/develop/2.jpg',
            thumb: '../../../../assets/develop/2.jpg'
        }),
        new ImageItem({
            src: '../../../../assets/develop/3.jpg',
            thumb: '../../../../assets/develop/3.jpg'
        }),
        new ImageItem({
            src: '../../../../assets/develop/4.jpg',
            thumb: '../../../../assets/develop/4.jpg'
        }),
        new ImageItem({
            src: '../../../../assets/develop/1.jpg',
            thumb: '../../../../assets/develop/1.jpg'
        }),
        new ImageItem({
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
            thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
        })
    ];

    constructor(private dialogRef: MatDialogRef<CardDetailComponent>,
                private breakpointObserver: BreakpointObserver,
                @Inject(MAT_DIALOG_DATA) private data: any) {
    }

    ngOnInit() {
        console.log(this.data);
        this.breakpointObserver
            .observe(['(min-width: 960px)'])
            .subscribe((state: BreakpointState) => {
                this.media = state.matches;
                console.log(this.media);
            });
    }

    submitClick() {
        this.dialogRef.close();
    }

    close(): void {
        this.dialogRef.close();
    }

}
