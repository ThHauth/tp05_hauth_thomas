import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from'@angular/router';
import { ProductsListComponent } from '../products-list/products-list.component';
import { SearchBarComponent} from '../search-bar/search-bar.component';
import { FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  }
];

@NgModule({
  declarations: [
    SearchBarComponent,
    ProductsListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
  
})
export class CatalogModuleModule { }
