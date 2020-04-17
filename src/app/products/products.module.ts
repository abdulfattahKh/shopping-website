import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { SharedModule } from '../shared/shared.module';
import { PopularItemComponent } from './popular-product/popular-item/popular-item.component';


@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductDetailsComponent, PopularProductComponent, PopularItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports:[
    ProductsComponent, ProductComponent, ProductDetailsComponent, PopularProductComponent,PopularItemComponent
  ]
})
export class ProductsModule { }
