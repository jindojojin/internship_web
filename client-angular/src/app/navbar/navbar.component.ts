import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { getCookie } from '../objects/Cookiee';
import { MessageModalService } from '../user/message-modal/message-modal.service';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageModalService]
})
export class NavbarComponent implements OnInit {
  SignIn: boolean;
  userName: string;
  isStudent: boolean;
  showLogo:boolean;
  user;
  @Output() showSideBar = new EventEmitter();
  showSideBarNow(){ this.showSideBar.emit();}
  @ViewChild(NotificationPopupComponent)
    notification: NotificationPopupComponent;

  @Output() loggedIn = new EventEmitter();
  updateUserInfor() {
    console.log("da update user infor")
    this.loggedIn.emit(null);
    this.SignIn = !this.SignIn;
    this.userName = (getCookie("nickname"));
    this.isStudent = (getCookie("userType") == "student");
    console.log(this.userName);
    this.notification.getMessage();    
  }

  receiverID: string;
  receiverName: string;
  messageTitle: string = "Tiêu đề";
  callMessageModal(obj) {
    this.receiverID = obj.receiverID;
    this.receiverName = obj.receiverName;
    this.messageTitle = obj.messageTitle;
    document.getElementById("btn-modal").click();
  }
  constructor() { }

  ngOnInit() {
    this.SignIn = (getCookie("userToken") != undefined);
    this.userName = (getCookie("nickname"));
    this.isStudent = (getCookie("userType") == "student");
  }

}
