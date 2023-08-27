import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './category-list/category-list.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DataModelModule } from './data/data.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    CategoryListComponent,
    HeaderComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
