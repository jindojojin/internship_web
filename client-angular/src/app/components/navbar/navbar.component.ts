import { Component, OnInit } from '@angular/core';
import { User } from '../../objects/User';
import { getCookie } from '../../objects/Cookiee';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  SignIn: boolean = (getCookie("userToken") != null);
  userName:string = (getCookie("nickname"));
  updateUserInfor(){
    this.SignIn = ! this.SignIn;
    this.userName = (getCookie("nickname"));
    console.log(this.userName);    
  }
  constructor() { }

  ngOnInit() {
  }

}
