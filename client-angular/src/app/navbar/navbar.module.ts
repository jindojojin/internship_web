import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { OcticonsDirective } from '../octicons.directive';
import { AppRoutingModule } from '../app-routing.module';
import { UserModule } from '../user/user.module';
import { OcticonsModule } from '../octicons/octicons.module';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';






@NgModule({
  imports: [
    OcticonsModule,
    CommonModule,
    FormsModule,
    UserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // OcticonsDirective,
    NavbarComponent,
    MenuUserComponent,
    SignInComponent,
    NotificationPopupComponent,
  ],
  exports: [
    NavbarComponent,
    AppRoutingModule
    // OcticonsDirective
  ],
})
export class NavbarModule { }
