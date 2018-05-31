import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VietnamPipe } from '../objects/Pipes/vietnam.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VietnamPipe],
  exports:[VietnamPipe]
})
export class ShareModule { }
