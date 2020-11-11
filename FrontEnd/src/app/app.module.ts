import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { PanierState } from "./states/panier-state";
import {NgxsModule} from '@ngxs/store';
import { RouterModule, Routes } from'@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ConnexionComponent } from './connexion/connexion.component';

const appRoutes: Routes = [{path: '', component: HomePageComponent},
                           {path:'productList',loadChildren:()=>import('./catalog-module/catalog-module.module').then(m=>m.CatalogModuleModule)},
                           {path:'cart',loadChildren:()=>import('./panier/panier.module').then(m=>m.PanierModule)},     
                           {path:'userAccount',loadChildren:()=>import('./formulaire/formulaire.module').then(m=>m.FormulaireModule)},     
                           {path:'productDetail/:id',loadChildren:()=>import('./product-details/product-details.module').then(m=>m.ProductDetailsModule)}];

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    HomePageComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([PanierState]),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
