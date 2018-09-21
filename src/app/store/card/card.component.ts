import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Output() clickDetail = new EventEmitter<any>();
    @Input() cardData: any;

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
