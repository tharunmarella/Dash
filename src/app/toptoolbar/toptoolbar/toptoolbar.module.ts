import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ToptoolbarComponent }from '../toptoolbar.component'



@NgModule({
  declarations: [ToptoolbarComponent],
  imports: [
    CommonModule
  ],
  exports:[ToptoolbarComponent],
})
export class ToptoolbarModule { }
