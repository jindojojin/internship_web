import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { deleteCookie, getCookie, deleteAllCookies } from '../../objects/Cookiee';
import { MenuUserService } from './menu-user.service'
import { Router } from '@angular/router';
import { isReplyMessage } from '../../objects/regex';


@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css'],
  providers: [MenuUserService]
})
export class MenuUserComponent implements OnInit {
  user;
  sumOfNotification = 0;
  @Output() loggedOut = new EventEmitter();
  @Output() replyMessage = new EventEmitter();
  @Input() userName: string;
  nickname: string;
  userID: string;

  notifications: any[];
  constructor(private menuUserService: MenuUserService, private router: Router) { }

  getMessage() {
    this.menuUserService.getMessages()
      .then(arrMessage => {
        this.sumOfNotification = arrMessage.length;
        this.notifications = arrMessage;
      })
      .catch(e => console.log(e));
  }

  reply(senderName: string, senderID: string, title: string) {
    title = isReplyMessage(title) ? title : ("Re: " + title);
    this.replyMessage.emit({ receiverName: senderName, receiverID: senderID, messageTitle: title });
  }
  markRead(messageID) {
    this.menuUserService.markMessageAsRead(messageID)
      .then(r => this.ngOnInit())
      .catch(e => this.ngOnInit())
  }
  async markAllRead() {
    for (let element of this.notifications) {
      await this.menuUserService.markMessageAsRead(element.messageID);
    }
    this.ngOnInit();
  }
  logOut() {
    deleteAllCookies();
    this.loggedOut.emit();
    this.router.navigate(['']);
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
  }

}
