import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { HomeComponent } from './../home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:HomeComponent}
  ]),
HttpClientModule,
ProductListComponent
],
providers:[ProductService],
  declarations: []
})
export class ProductModule { }
