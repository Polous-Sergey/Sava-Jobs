import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Output() clickDetail = new EventEmitter<void>();
    @Input() cardData: any;

    constructor() {
    }

    ngOnInit() {
    }

    detail() {
        this.clickDetail.emit();
    }

    bye() {
        console.log(this.cardData);
    }

}
