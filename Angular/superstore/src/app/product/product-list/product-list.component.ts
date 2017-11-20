import { ProductService } from './../product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  products;
  constructor(private service:ProductService) { }

  ngOnInit() {

  }

  ngOnDestroy()
  {
    
  }

}
