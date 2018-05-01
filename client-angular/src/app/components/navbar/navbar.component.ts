import { Component, OnInit } from '@angular/core';
import { User } from '../../objects/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  SignIn: boolean = false;
  userName:string ="";
  updateUserInfor(user:User){
    this.SignIn = true;
    this.userName = user.userName;
    console.log(this.userName);    
  }
  constructor() { }

  ngOnInit() {
  }

}
