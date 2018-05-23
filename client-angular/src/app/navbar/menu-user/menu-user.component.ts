import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { deleteCookie, getCookie, deleteAllCookies } from '../../objects/Cookiee';
import { MenuUserService } from './menu-user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css'],
  providers: [MenuUserService]
})
export class MenuUserComponent implements OnInit {
  sumOfNotification: number;
  @Output() loggedOut = new EventEmitter();
  @Output() replyMessage = new EventEmitter();
  @Input() userName: string;
  nickname: string;
  userID: string;

  notifications: any[];
  constructor(private menuUserService: MenuUserService, private router: Router) { }

  getMessage() {
    // console.log("bắt đầu lấy tin nhắn của người dùng");
    this.menuUserService.getMessages()
      .then(arrMessage => {
        console.log("đã nhận về mảng tin nhắn");
        console.log(arrMessage);
        this.sumOfNotification = arrMessage.length;
        this.notifications = arrMessage;
      })
      .catch(e => console.log(e));
  }

  reply(senderName:string, senderID:string){
    // console.log("đã vào reply");
    this.replyMessage.emit({receiverName:senderName, receiverID:senderID});    
  }

  logOut() {
    // console.log("đã loggedOut");
    deleteAllCookies();
    this.router.navigate(['jobs']);
    this.loggedOut.emit()
  }

  isAdmin: boolean;
  isLecturer: boolean;
  isPartner: boolean;
  isStudent: boolean;
  ngOnInit() {
    this.nickname = this.userName;
    this.userID = getCookie("userID");
    this.getMessage();
    this.isAdmin = getCookie("userType") == "admin"
    this.isLecturer = getCookie("userType") == "lecturer"
    this.isPartner = getCookie("userType") == "partner"
    this.isStudent = getCookie("userType") == "student"
    console.log("day la "+ getCookie("userType"));
  }

}
