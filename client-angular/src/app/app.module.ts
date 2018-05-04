import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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

import {UserModule} from './user/user.module';
import { StudentModule } from './student/student.module';
import { LecturerModule } from './lecturer/lecturer.module';
import { PartnerModule } from './partner/partner.module';
import { StudentRequireService } from './security_config/student_require.service';
import { AdminRequireService } from './security_config/admin_require.service';
import { PartnerRequireService } from './security_config/partner_require.service';
import { LecturerRequireService } from './security_config/lecturer_require.service';


@NgModule({
  declarations: [
    AppComponent,    
    PartnerListComponent,
    PartnerCardComponent,
    JobListComponent,
    PostComponent, 
    SpinnerLoadingComponent,    
  ],
  imports: [         
    BrowserModule,
    HttpModule,
    AdminModule,    
    UserModule,
    NgbModule.forRoot(),
    StudentModule,
    LecturerModule,
    PartnerModule,
    NavbarModule,  
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
