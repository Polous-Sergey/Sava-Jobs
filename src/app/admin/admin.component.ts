import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    media = {};

    constructor(private breakpointObserver: BreakpointObserver) {
    }

    ngOnInit() {
        this.breakpointObserver
            .observe(['(max-width: 599px)', '(min-width: 600px) and (max-width: 1279px)', '(min-width: 1280px)'])
            .subscribe(this.mediaParser);
    }

    mediaParser (state: BreakpointState) {
        this.media = {};
        console.log('media', this.media);
        console.log('media', state);
        console.log('media', state.breakpoints['(max-width: 599px)']);
        // this.media.xs = state.breakpoints['(max-width: 599px)'];
        // this.media.smMd = state.breakpoints['(min-width: 600px) and (max-width: 1279px)'];
        // this.media.lgXl = state.breakpoints['(min-width: 1280px)'];
        // console.log('media', this.media);
    }

}
