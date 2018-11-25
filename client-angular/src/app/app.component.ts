import { Component, OnInit, ViewChild } from '@angular/core';
import { getCookie } from './objects/Cookiee';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  expandSideBar=true;

  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  logged: boolean;

  ngOnInit() {
    this.logged = (getCookie("userToken") != undefined);
  }

  updateSidebar(){
    this.expandSideBar = !this.expandSideBar;
    this.navbar.showLogo= !this.navbar.showLogo;    
  }

  
}
