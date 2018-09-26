import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../shared/model/product';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Output() clickDetail = new EventEmitter<any>();
    @Input() cardData: Product;

    constructor() {
    }

    ngOnInit() {
    }

    detail() {
        this.clickDetail.emit(this.cardData);
    }

    bye() {
        console.log(this.cardData);
    }

}
