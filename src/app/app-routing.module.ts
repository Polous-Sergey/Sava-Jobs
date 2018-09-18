import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoreComponent} from './store/store.component';
import {ServiceComponent} from './service/service.component';

const routes: Routes = [
    {path: '', redirectTo: '/store', pathMatch: 'full'},
    {path: 'store', component: StoreComponent},
    {path: 'service', component: ServiceComponent},
    {path: '**', redirectTo: '/store'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
