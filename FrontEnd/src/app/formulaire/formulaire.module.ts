import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from'@angular/router';
import { FormulaireComponent } from './formulaire.component';
import { FormsModule} from '@angular/forms';
import { RecapComponent } from '../recap/recap.component';
import { PhoneFormatPipe } from '../phone-format.pipe';

const routes: Routes = [
  {
    path: '',
    component: FormulaireComponent
  }
];



@NgModule({
  declarations: [FormulaireComponent,RecapComponent,PhoneFormatPipe],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormulaireModule { }
