import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { NotificationBellComponent } from './components/notification-bell/notification-bell.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent,
    HomeComponent,
    PartnerCardComponent,
    OcticonsDirective,
    MenuBarComponent,
    NotificationBellComponent,
    MenuUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
