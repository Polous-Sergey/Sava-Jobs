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
import {LayoutModule} from '@angular/cdk/layout';
import {ServiceHeaderComponent} from './service/service-header/service-header.component';
import {MediaMenuComponent} from './shared/modal/media-menu/media-menu.component';
import {AgmCoreModule} from '@agm/core';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import {SubmitOrderComponent} from './shared/modal/submit-order/submit-order.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        StoreComponent,
        CardComponent,
        StoreHeaderComponent,
        ServiceComponent,
        CardDetailComponent,
        ServiceHeaderComponent,
        MediaMenuComponent,
        SubmitOrderComponent
    ],
    entryComponents: [
        CardDetailComponent,
        MediaMenuComponent,
        SubmitOrderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FlexLayoutModule,
        LayoutModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDfiKM5cIk8zisr3nUa0dro7qH4A3WrgQ4'
        }),
        GalleryModule.forRoot(),
        LightboxModule.forRoot({
            panelClass: 'fullscreen'
        }),
        GallerizeModule
    ],
    providers: [
        StoreService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
