import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {MediaMenuComponent} from '../shared/modal/media-menu/media-menu.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    media;

    constructor(private breakpointObserver: BreakpointObserver,
                private dialog: MatDialog) {
    }

    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 700px)'])
            .subscribe((state: BreakpointState) => {
                this.media = state.matches;
            });
    }

    mediaMenu() {
        const confiq: any = {
            width: '90%',
            height: '65%'
        };
        this.dialog.open(MediaMenuComponent, confiq);
    }

}
