import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Products } from './products/products';
import { Footer } from './footer/footer';

// Import your pipes
import { ProductFilterPipe } from './pipes/product-filter-pipe';
import { RatingStarsPipe } from './pipes/rating-stars-pipe';

@NgModule({
  declarations: [
    App,
    Navbar,
    Products,
    Footer,
    ProductFilterPipe,    // Add this
    RatingStarsPipe       // Add this
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }