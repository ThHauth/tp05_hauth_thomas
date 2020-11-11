import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from'@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent
  }
];


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductDetailsModule { }
