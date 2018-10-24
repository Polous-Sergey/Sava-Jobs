import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {PriceListItem} from '../../model/price-list-item';

@Component({
    selector: 'app-add-edit-price-list-item',
    templateUrl: './add-edit-price-list-item.component.html',
    styleUrls: ['./add-edit-price-list-item.component.scss']
})
export class AddEditPriceListItemComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<AddEditPriceListItemComponent>,
                @Inject(MAT_DIALOG_DATA) private priceListItem: PriceListItem) {
    }

    ngOnInit() {
        if (!this.priceListItem) {
            this.priceListItem = new PriceListItem('', '', '');
        }
    }

    submitClick() {
        if (this.priceListItem.title.length > 2 || this.priceListItem.subTitle.length > 2 || this.priceListItem.price.length > 2) {
            this.dialogRef.close(this.priceListItem);
        }
    }

    closeClick(): void {
        this.dialogRef.close();
    }

}
