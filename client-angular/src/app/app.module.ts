import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// const routes: Routes = [
//   { path: 'home', component: HomeComponent }
// ];

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PartnerCardComponent } from './partner-card/partner-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { OcticonsDirective } from './octicons.directive';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent,
    HomeComponent,
    PartnerCardComponent,
    OcticonsDirective
    
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
