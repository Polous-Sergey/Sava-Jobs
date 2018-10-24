import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-edit-price-list-category',
    templateUrl: './add-edit-price-list-category.component.html',
    styleUrls: ['./add-edit-price-list-category.component.scss']
})
export class AddEditPriceListCategoryComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<AddEditPriceListCategoryComponent>,
                @Inject(MAT_DIALOG_DATA) private categoryName: string) {
    }

    ngOnInit() {
        console.log(this.categoryName);
        if (!this.categoryName) {
            this.categoryName = '';
        }
    }

    submitClick() {
        if (this.categoryName !== '' || this.categoryName.length > 3) {
            this.dialogRef.close(this.categoryName);
        }
    }

    closeClick(): void {
        this.dialogRef.close();
    }
}
