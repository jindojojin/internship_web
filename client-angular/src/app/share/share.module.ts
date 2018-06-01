import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VietnamPipe } from '../objects/Pipes/vietnam.pipe';
import { ImageFromServerPipe } from '../objects/Pipes/image-from-server.pipe';
import { ReplaceSpacePipe } from '../objects/Pipes/replace-space.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VietnamPipe, ImageFromServerPipe, ReplaceSpacePipe],
  exports:[VietnamPipe, ImageFromServerPipe, ReplaceSpacePipe]
})
export class ShareModule { }
