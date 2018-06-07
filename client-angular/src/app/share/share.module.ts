import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VietnamPipe } from './Pipes/vietnam.pipe';
import { ImageFromServerPipe } from './Pipes/image-from-server.pipe';
import { ReplaceSpacePipe } from './Pipes/replace-space.pipe';
import { IsStudentPipe } from './Pipes/is-student.pipe';
import { IsAdminPipe } from './Pipes/is-admin.pipe';
import { IsLecturerPipe } from './Pipes/is-lecturer.pipe';
import { IsPartnerPipe } from './Pipes/is-partner.pipe';
import { PostComponent } from '../components/job-list/post/post.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { LimitTitlePipe } from './Pipes/limit-title.pipe';
import { IsLoggedPipe } from './Pipes/is-logged.pipe';
import { isValidDatePipe } from './Pipes/is-valid-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [isValidDatePipe,VietnamPipe, ImageFromServerPipe, ReplaceSpacePipe, IsStudentPipe, IsAdminPipe, IsLecturerPipe, IsPartnerPipe, LimitTitlePipe, IsLoggedPipe],
  exports:[isValidDatePipe,VietnamPipe, ImageFromServerPipe, ReplaceSpacePipe,IsStudentPipe, IsAdminPipe, IsLecturerPipe, IsPartnerPipe,LimitTitlePipe,IsLoggedPipe]
})
export class ShareModule { }
