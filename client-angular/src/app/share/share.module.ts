import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VietnamPipe } from './Pipes/vietnam.pipe';
import { ImageFromServerPipe } from './Pipes/image-from-server.pipe';
import { ReplaceSpacePipe } from './Pipes/replace-space.pipe';
import { IsStudentPipe } from './Pipes/is-student.pipe';
import { IsAdminPipe } from './Pipes/is-admin.pipe';
import { IsLecturerPipe } from './Pipes/is-lecturer.pipe';
import { IsPartnerPipe } from './Pipes/is-partner.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VietnamPipe, ImageFromServerPipe, ReplaceSpacePipe, IsStudentPipe, IsAdminPipe, IsLecturerPipe, IsPartnerPipe],
  exports:[VietnamPipe, ImageFromServerPipe, ReplaceSpacePipe,IsStudentPipe, IsAdminPipe, IsLecturerPipe, IsPartnerPipe]
})
export class ShareModule { }
