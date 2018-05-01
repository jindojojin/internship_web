import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadonlyEmailComponent } from './profile-page/readonly-email/readonly-email.component';
import { OverviewNameComponent } from './profile-page/overview-name/overview-name.component';
import { OverviewAvatarComponent } from './profile-page/overview-avatar/overview-avatar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReadonlyEmailComponent,
    OverviewNameComponent,
    OverviewAvatarComponent,
    ProfilePageComponent,
  ]
})
export class UserModule { }
