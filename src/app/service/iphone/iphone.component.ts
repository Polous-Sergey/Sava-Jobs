import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-iphone',
    templateUrl: './iphone.component.html',
    styleUrls: ['./iphone.component.scss']
})
export class IphoneComponent implements OnInit {
    iphones = [];


    constructor() {
    }

    ngOnInit() {
        for (let i = 0; this.iphones.length < 5; i++) {
            this.iphones.push('/assets/pictures/iphone/iphone7-colors.png');
        }
        console.log(this.iphones);
    }

}
