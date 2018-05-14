import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OverviewAvatarComponent } from './profile-page/overview-avatar/overview-avatar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { FormsModule } from '@angular/forms';
import { FileBrowserAndUploaderComponent } from './file-browser-and-uploader/file-browser-and-uploader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OverviewAvatarComponent,
    ProfilePageComponent,
    HomePageComponent,
    MessageModalComponent,
    FileBrowserAndUploaderComponent
  ],
        
    exports:[MessageModalComponent,FileBrowserAndUploaderComponent]
})
export class UserModule { }
