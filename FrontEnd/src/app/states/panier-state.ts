import { NgxsModule, Action, Selector, State, StateContext } from "@ngxs/store";
import { PanierStateModel } from "./panier-state-model";
import { AddProduct, DelProduct } from "../actions/panier-actions";

@State<PanierStateModel>({
  name: "listProducts",
  defaults: {
    products: []
  }
})
export class PanierState {
  @Selector()
  static getNbProducts(state: PanierStateModel): number {
    return state.products.length;
  }
  
  @Selector()
  static getPrice(state: PanierStateModel): number {
    let res:number=0;
    for(let i = 0; i<state.products.length; i++){
      res+=state.products[i].prix;
    }
    return res;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    patchState({
      // créer un nouveau tableau
      // l'opérateur ... permet de consituer une liste d'élement du tableau
      products: [...state.products, payload]
    });
  }

  @Action(DelProduct)
  del(
    { getState, patchState }: StateContext<PanierStateModel>,
    { payload }: DelProduct
  ) {
    const state = getState();
    const prods = state.products;
    prods.splice(payload,1);
    patchState({
      // supprimer le payload dans panier
      products: prods
    });
  }
}
