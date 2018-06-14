import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcticonsDirective } from './octicons.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OcticonsDirective
  ],
  exports: [OcticonsDirective]
})
export class OcticonsModule { }
