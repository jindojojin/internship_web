import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OverviewAvatarComponent } from './profile-page/overview-avatar/overview-avatar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagePageComponent } from './message-page/message-page.component';
import { OcticonsModule } from '../octicons/octicons.module';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';
import { ChangePasswordModalComponent } from './change-password-modal/change-password-modal.component';
import { UserService } from './user.service';
import { AssessStudentModalComponent } from '../components/assess-student-modal/assess-student-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OcticonsModule,
    ReactiveFormsModule,
    ShareModule, RouterModule
  ],
  declarations: [
    OverviewAvatarComponent,
    ProfilePageComponent,
    HomePageComponent,
    MessageModalComponent,
    MessagePageComponent,
    ChangePasswordModalComponent,
    AssessStudentModalComponent
  ],

  exports: [MessageModalComponent,
    MessagePageComponent,
    MessageModalComponent,
    ChangePasswordModalComponent,
    AssessStudentModalComponent
  ],

  providers: [UserService]
})
export class UserModule { }
