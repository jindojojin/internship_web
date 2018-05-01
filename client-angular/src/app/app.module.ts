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
import { UserModule } from './user/user.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,    
    PartnerListComponent,
    PartnerCardComponent,
    // OcticonsDirective,
    JobListComponent,
    PostComponent,
    
    SpinnerLoadingComponent,    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AdminModule,    
    UserModule,
    NavbarModule,
    
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
