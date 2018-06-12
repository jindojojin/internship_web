import { Component, OnInit } from '@angular/core';
import { MenuUserService } from '../menu-user/menu-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css'],
  providers:[MenuUserService]
})
export class NotificationPopupComponent implements OnInit {

  sumOfNotification: number;
  notifications: any[]=null;
  constructor(private menuUserService: MenuUserService, private router: Router) { }
  showModal(){
    document.getElementById("notificationPopupOpenButton").click();
  }
  closeModal(){
    document.getElementById("notificationPopupCloseButton").click();

  }

  getMessage() {
    // console.log("bắt đầu lấy tin nhắn của người dùng");
    this.menuUserService.getMessages()
      .then(arrMessage => {
        // console.log("đã nhận về mảng tin nhắn");
        // console.log(arrMessage);
        this.sumOfNotification = arrMessage.length;
        this.notifications = arrMessage;
        this.showModal();
      })
      .catch(e => console.log(e));
  }

  ngOnInit() {
  }

}
