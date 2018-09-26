import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Product} from '../../model/product';

@Component({
    selector: 'app-card-previev',
    templateUrl: './card-previev.component.html',
    styleUrls: ['./card-previev.component.scss']
})
export class CardPrevievComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<CardPrevievComponent>,
                @Inject(MAT_DIALOG_DATA) private card: Product) {
    }

    ngOnInit() {
    }

}
