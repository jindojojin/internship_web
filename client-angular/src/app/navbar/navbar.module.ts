import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { MenuSearchBarComponent } from './menu-search-bar/menu-search-bar.component';
import { NotificationComponent } from './menu-user/notification/notification.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OcticonsDirective } from '../octicons.directive';
import { AppRoutingModule } from '../app-routing.module';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,     
    ReactiveFormsModule,
  ],
  declarations: [
    OcticonsDirective, 
    NavbarComponent,
    MenuUserComponent,    
    NotificationComponent,
    MenuSearchBarComponent,  
    SignInComponent,    
  ],
  exports:[NavbarComponent,AppRoutingModule,OcticonsDirective],
  
})
export class NavbarModule { }
