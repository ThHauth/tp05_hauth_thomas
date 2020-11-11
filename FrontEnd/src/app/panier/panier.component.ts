import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from '../models/product';
import { Store } from "@ngxs/store";
import { DelProduct } from '../actions/panier-actions';
import { PanierState } from "../states/panier-state";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})


export class PanierComponent implements OnInit {
  
  listProducts$: Observable<Product[]>;
  nbProducts$: Observable<number>;
  price$: Observable<number>;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.listProducts$ = this.store.select(state => state.listProducts.products);
    this.price$ = this.store.select(PanierState.getPrice);
  }

  onClick(index) {
    this.delProduct(index);
  }

  delProduct(index:number) {
    this.store.dispatch(new DelProduct(index));
  }

}
