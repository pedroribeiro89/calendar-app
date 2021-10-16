import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthSelectComponent } from './month-select/month-select.component';



@NgModule({
  declarations: [
    MonthSelectComponent
  ],
  exports: [
    MonthSelectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MonthSelectModule { }
