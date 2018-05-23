import { Component, OnInit } from '@angular/core';
import { getCookie } from '../objects/Cookiee';
import { MessageModalService } from '../user/message-modal/message-modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[MessageModalService]
})
export class NavbarComponent implements OnInit {
  SignIn: boolean;
  userName:string;
  isStudent: boolean;
  updateUserInfor(){
    console.log("da update user infor")
    this.SignIn = ! this.SignIn;
    this.userName = (getCookie("nickname"));
    this.isStudent = (getCookie("userType") == "student");    
    console.log(this.userName);    
  }

  receiverID:string;
  receiverName:string;
  callMessageModal(obj){
    this.receiverID = obj.receiverID;
    this.receiverName = obj.receiverName;
    document.getElementById("btn-modal").click();
  }
  constructor() { }

  ngOnInit() {
    this.SignIn = (getCookie("userToken") != undefined);
    this.userName = (getCookie("nickname"));
    this.isStudent = (getCookie("userType") == "student");
  }

}
