import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {

  
  constructor(private http:HttpClient) { }

  
  getProducts(){
    this.http.get('http://localhost:3000/products')
  }

  // addProduct()
  // {
  //   this.http.post('http://localhost:3000/products',product);
  // }
}


