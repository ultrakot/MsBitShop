import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component';
import { ProductThumbnailComponent } from './products/product-thumbnail.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { DataService } from './products/shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductThumbnailComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
