import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import {ApiService} from '../services/api.service';
import { Product } from '../models/product';
import { Store } from "@ngxs/store";
import { AddProduct } from '../actions/panier-actions';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products : Observable<Product[]>;
  productArray : Product[];
  allProducts:Product[];
  consoleFilter:string = "Tout";
  dispFilter:number = 0;
  textFilter:string = "";

  constructor(private apiService : ApiService,private store: Store) { }

  ngOnInit() {
    this.products = this.apiService.getProducts();
    this.products.subscribe((product) => {this.productArray = product});  
    this.products.subscribe((product) => {this.allProducts = product});
  }

  ApplyFilters(){
    this.productArray = this.allProducts;
    this.productArray = this.ApplyConsoleFilter(this.productArray);
    this.productArray = this.ApplyDisponibilityFilter(this.productArray);
    this.productArray = this.ApplyTextFilter(this.productArray);
  }

  SaveConsoleFilter(data){   
    this.consoleFilter = data; 
    this.ApplyFilters();   
  }

  SaveDisponibilityFilter(data){
    this.dispFilter = data;
    this.ApplyFilters();
  }

  SaveTextFilter(data){
    this.textFilter = data;
    this.ApplyFilters();
  }

  ApplyTextFilter(_products:Product[]):Product[]{
    let res:Product[];
    console.log(this.textFilter);
    if(this.textFilter !== "" && this.textFilter !== undefined){
      res = _products.filter(product => product.nom.toLowerCase().includes(this.textFilter.toLowerCase()));
    }
    else{
      res = _products;
    }
    return res; 
  }

  ApplyConsoleFilter(_products:Product[]):Product[]{
    let res:Product[];
    switch(this.consoleFilter){    
      case "Tout":
        res = _products;              
      break;
      case "PC":
        res = _products.filter(product => product.plateforme === "PC");               
      break;
      case "PS4": 
        res = _products.filter(product => product.plateforme === "PS4");               
      break;
      case "XBox One":        
        res = _products.filter(product => product.plateforme === "XBox One");    
      break;
      case "Nintendo Switch":       
        res = _products.filter(product => product.plateforme === "Nintendo Switch");                
      break;
    }
    return res;
  }

  ApplyDisponibilityFilter(_products:Product[]):Product[]{
    let res:Product[];
    switch(this.dispFilter){
      case 0:
        res = _products;
      break;
      case 1:
        res = _products.filter(product => product.disponible === true);
      break;
      case 2:
        res = _products.filter(product => product.disponible === false);
      break;
    }
    return res;    
  }

  onClick(id) {
    let productsRes:Product[];
    productsRes = this.productArray.filter(product => product.id === id);   
    this.addProduct(productsRes[0]);
  }

  addProduct(product:Product) {
    this.store.dispatch(new AddProduct(product));
  }

}
