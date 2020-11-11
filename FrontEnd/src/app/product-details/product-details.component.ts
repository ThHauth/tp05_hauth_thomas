import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from "rxjs";
import { Store } from "@ngxs/store"
import {ActivatedRoute} from'@angular/router';
import {ApiService} from '../services/api.service';
import { AddProduct } from '../actions/panier-actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number = 0;
  products: Observable<Product[]>;
  productArray:Product[] = [];
  actualProduct: Product = new Product();
  
  constructor(private apiService : ApiService, private store: Store,private route: ActivatedRoute) { }

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getProducts().subscribe(list => this.actualProduct = list.find(item => item.id === this.id));  

  }

  onClick() {   
    this.addProduct(this.actualProduct);
  }

  addProduct(product:Product) {
    this.store.dispatch(new AddProduct(product));
  }
  

}
