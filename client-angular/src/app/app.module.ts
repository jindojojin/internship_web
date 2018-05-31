import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PartnerListComponent } from './components/partner-list/partner-list.component';
import { PartnerCardComponent } from './components/partner-list/partner-card/partner-card.component';
import { PostComponent } from './components/job-list/post/post.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { AdminModule } from './admin/admin.module';
import { NavbarModule } from './navbar/navbar.module';
import { ProfilePageComponent } from './user/profile-page/profile-page.component';

import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { LecturerModule } from './lecturer/lecturer.module';
import { PartnerModule } from './partner/partner.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LecturerListComponent } from './components/lecturer-list/lecturer-list.component';
import { LecturerCardComponent } from './components/lecturer-list/lecturer-card/lecturer-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OcticonsModule } from './octicons/octicons.module';


import { ReplaceSpacePipe } from './objects/Pipes/replace-space.pipe';
import { ImageFromServerPipe } from './objects/Pipes/image-from-server.pipe';
import { MenuSearchBarComponent } from './navbar/menu-search-bar/menu-search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VietnamPipe } from './objects/Pipes/vietnam.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuSearchBarComponent,
    PartnerListComponent,
    PartnerCardComponent,
    JobListComponent,
    PostComponent,
    SpinnerLoadingComponent,
    PageNotFoundComponent,
    LecturerListComponent,
    LecturerCardComponent,
    SidebarComponent,
    ReplaceSpacePipe,
    ImageFromServerPipe,
  ],
  imports: [
    OcticonsModule,
    BrowserModule,
    HttpModule,
    UserModule,
    AdminModule,
    StudentModule,
    LecturerModule,
    PartnerModule,
    NgbModule.forRoot(),
    NavbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
