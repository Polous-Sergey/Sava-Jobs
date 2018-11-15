import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Product} from '../../model/product';

@Component({
  selector: 'app-submit-order',
  templateUrl: './submit-order.component.html',
  styleUrls: ['./submit-order.component.scss']
})
export class SubmitOrderComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SubmitOrderComponent>,
              @Inject(MAT_DIALOG_DATA) public products: Product) {
  }

  ngOnInit() {
    console.log(this.products);
  }

  submitClick() {
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
