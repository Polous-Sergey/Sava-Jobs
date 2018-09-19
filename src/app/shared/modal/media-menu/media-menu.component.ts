import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-media-menu',
    templateUrl: './media-menu.component.html',
    styleUrls: ['./media-menu.component.scss']
})
export class MediaMenuComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<MediaMenuComponent>) {
    }

    ngOnInit() {
    }

    onClick(): void {
        this.dialogRef.close();
    }
}
