import { Component, OnInit } from '@angular/core';
import { User } from '../objects/User';
import { getCookie } from '../objects/Cookiee';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  SignIn: boolean;
  userName:string;
  isAdmin: boolean;
  updateUserInfor(){
    console.log("da update user infor")
    this.SignIn = ! this.SignIn;
    this.userName = (getCookie("nickname"));
    console.log(this.userName);    
  }
  constructor() { }

  ngOnInit() {
    // console.log(getCookie("userToken"))
    this.SignIn = (getCookie("userToken") != undefined);
    this.userName = (getCookie("nickname"));
    this.isAdmin = (getCookie("userType") == "admin");
    // console.log(getCookie("userType"));
    // console.log(this.isAdmin);
  }

}
