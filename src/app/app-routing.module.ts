import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoreComponent} from './store/store.component';
import {ServiceComponent} from './service/service.component';
import {AdminComponent} from './admin/admin.component';
import {AdminStoreComponent} from './admin/admin-store/admin-store.component';
import {AdminServiceComponent} from './admin/admin-service/admin-service.component';
import {OrdersComponent} from './admin/orders/orders.component';
import {IphoneComponent} from './service/iphone/iphone.component';
import {PriceListComponent} from './service/price-list/price-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/store', pathMatch: 'full'},
    {path: 'store', component: StoreComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'service/iphone', component: IphoneComponent},
    {path: 'service/price-list/:id', component: PriceListComponent},
    {
        path: 'admin', component: AdminComponent, children:
        [
            {path: '', redirectTo: '/admin/store', pathMatch: 'full'},
            {path: 'store', component: AdminStoreComponent},
            {path: 'service', component: AdminServiceComponent},
            {path: 'orders', component: OrdersComponent},
            {path: '**', redirectTo: '/admin/store'}
        ]
    },
    {path: '**', redirectTo: '/store'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
