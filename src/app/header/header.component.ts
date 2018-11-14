import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {MediaMenuComponent} from '../shared/modal/media-menu/media-menu.component';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  searchData = {
    type: [],
    model: [],
    category: [],
    item: [],
    products: []
  };
  searchFocuse = false;
  media;

  @ViewChild('input') input: ElementRef;

  constructor(private breakpointObserver: BreakpointObserver,
              private dialog: MatDialog,
              private searchServics: SearchService) {
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        this.media = state.matches;
      });
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        tap(() => {
          console.log('request');
          if (this.input.nativeElement.value.length < 3) return;
          this.searchServics.getSearchResult(this.input.nativeElement.value).subscribe((res: any) => {
            if (res.success) {
              this.searchData = res.data;
            }
          });
        })
      )
      .subscribe();

    fromEvent(this.input.nativeElement, 'focus')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.searchFocuse = true;
        })
      )
      .subscribe();

    fromEvent(this.input.nativeElement, 'focusout')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.searchFocuse = false;
        })
      )
      .subscribe();
  }

  mediaMenu() {
    const confiq: any = {
      width: '90%',
      height: '65%'
    };
    this.dialog.open(MediaMenuComponent, confiq);
  }

}
