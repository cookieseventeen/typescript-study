import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  {
    path: 'product-item',
    component: ProductItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
