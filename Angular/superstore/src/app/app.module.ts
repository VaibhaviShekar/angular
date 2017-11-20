import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    ProductComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'products',loadChildren:'app/product/product.module#ProductModule'},
      {path:'about',component:AboutComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
