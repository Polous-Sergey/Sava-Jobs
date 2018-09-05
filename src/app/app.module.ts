import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {StoreComponent} from './store/store.component';
import {CardComponent} from './store/card/card.component';
import {StoreHeaderComponent} from './store/store-header/store-header.component';
import {ServiceComponent} from './service/service.component';
import {CardDetailComponent} from './shared/modal/card-detail/card-detail.component';
import {StoreService} from './services/store.service';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        StoreComponent,
        CardComponent,
        StoreHeaderComponent,
        ServiceComponent,
        CardDetailComponent
    ],
    entryComponents: [
        CardDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FlexLayoutModule
    ],
    providers: [
        StoreService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
