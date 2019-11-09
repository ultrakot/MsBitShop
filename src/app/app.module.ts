import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component';
import { ProductThumbnailComponent } from './products/product-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
