import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

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
import {AdminComponent} from './admin/admin.component';
import {AdminHeaderComponent} from './admin/admin-header/admin-header.component';
import {AdminStoreComponent} from './admin/admin-store/admin-store.component';
import {AdminServiceComponent} from './admin/admin-service/admin-service.component';
import {OrdersComponent} from './admin/orders/orders.component';
import {CardPrevievComponent} from './shared/modal/card-previev/card-previev.component';
import {AddEditProductComponent} from './shared/modal/add-edit-product/add-edit-product.component';
import {AdminStoreService} from './services/admin.store.service';
import {EditProductComponent} from './shared/modal/edit-product/edit-product.component';
import {PriceListComponent} from './service/price-list/price-list.component';
import {ServiceCenterService} from './services/service-center.service';
import {AdminServiceCenterService} from './services/admin-service-center.service';
import {AddEditPriceListComponent} from './shared/modal/add-edit-price-list/add-edit-price-list.component';
import {AddEditPriceListCategoryComponent} from './shared/modal/add-edit-price-list-category/add-edit-price-list-category.component';
import {AddEditPriceListItemComponent} from './shared/modal/add-edit-price-list-item/add-edit-price-list-item.component';
import {DeviceListComponent} from './service/device-list/device-list.component';
import {SearchService} from './services/search.service';
import {SessionStorageService} from './services/session-storage.service';
import {OrderService} from './services/order.service';
import {DetailOrderComponent} from './shared/modal/detail-order/detail-order.component';

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
        SubmitOrderComponent,
        AdminComponent,
        AdminHeaderComponent,
        AdminStoreComponent,
        AdminServiceComponent,
        OrdersComponent,
        CardPrevievComponent,
        AddEditProductComponent,
        EditProductComponent,
        DeviceListComponent,
        PriceListComponent,
        AddEditPriceListComponent,
        AddEditPriceListCategoryComponent,
        AddEditPriceListItemComponent,
        DetailOrderComponent
    ],
    entryComponents: [
        CardDetailComponent,
        MediaMenuComponent,
        SubmitOrderComponent,
        CardPrevievComponent,
        AddEditProductComponent,
        EditProductComponent,
        AddEditPriceListComponent,
        AddEditPriceListCategoryComponent,
        AddEditPriceListItemComponent,
        DetailOrderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
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
        StoreService,
        AdminStoreService,
        ServiceCenterService,
        AdminServiceCenterService,
        SearchService,
        SessionStorageService,
        OrderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
