import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'order',
    component: OrderDetailsComponent
  },
  {
    path: 'summary/:id',
    component: SummaryComponent
  },
  {
    path: '',
    component: ProductListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
