import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { RouterModule, Routes } from '@angular/router';
// const routes: Routes = [
//   { path: 'home', component: HomeComponent }
// ];

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PartnerCardComponent } from './components/partner-card/partner-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { OcticonsDirective } from './octicons.directive';
// import { NotificationBellComponent } from './components/notification-bell/notification-bell.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { PostComponent } from './components/post/post.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { ReadonlyEmailComponent } from './components/profile-page/readonly-email/readonly-email.component';
import { OverviewNameComponent } from './components/profile-page/overview-name/overview-name.component';
import { OverviewAvatarComponent } from './components/profile-page/overview-avatar/overview-avatar.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { MenuSearchBarComponent } from './components/menu-search-bar/menu-search-bar.component';
import { NotificationComponent } from './components/menu-user/notification/notification.component';
import { AdminModule } from './admin/admin.module';





@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent,
    HomeComponent,
    PartnerCardComponent,
    OcticonsDirective,
    // NotificationBellComponent,
    MenuUserComponent,
    JobListComponent,
    PostComponent,
    ReadonlyEmailComponent,
    OverviewNameComponent,
    OverviewAvatarComponent,
    ProfilePageComponent,
    SpinnerLoadingComponent,
    NotificationComponent,
    MenuSearchBarComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
