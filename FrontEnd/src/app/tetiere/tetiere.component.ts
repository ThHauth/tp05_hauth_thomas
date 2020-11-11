import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngxs/store";
import { PanierState } from "../states/panier-state";

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {

  nbProducts$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.nbProducts$ = this.store.select(PanierState.getNbProducts);
  }

}
