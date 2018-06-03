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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OcticonsModule,
    ReactiveFormsModule,
    ShareModule
  ],
  declarations: [
    OverviewAvatarComponent,
    ProfilePageComponent,
    HomePageComponent,
    MessageModalComponent,
    MessagePageComponent,    
  ],

  exports: [MessageModalComponent, 
    MessagePageComponent,
    MessageModalComponent,
  ]
})
export class UserModule { }
