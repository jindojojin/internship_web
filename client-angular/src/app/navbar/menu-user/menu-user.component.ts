import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../objects/Messgase';
import { deleteCookie, getCookie } from '../../objects/Cookiee';
import { MenuUserService } from './menu-user.service'


@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css'],
  providers: [MenuUserService]
})
export class MenuUserComponent implements OnInit {
  sumOfNotification: number;
  @Output() loggedOut = new EventEmitter();
  @Input() userName: string;
  nickname: string = "Trần Quang Linh";
  // notifications: Message[] = [
  //   {senderName : "linh", title: "day la mot thong bao",content:'dfascasdfsdfsdf dfsjf sdlkfsadlfkasd fsf sdsdfasdflasdf',messageID: 2},
  //   {senderName : "linadsfash", title: "day la mot thondsfasfsdg bao",content:'dfascasdfsdfadfsfasdfsdlkfsadlfkasd fsf sdsdfasdflasdf',messageID: 4},
  //   {senderName : "linh", title: "day la mot thong bao daiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",content:'đoạn văn này rất là dài, dài đến mức ai đọc cũng phải điên đầu lên vì quá dài và còn nhảm :3 dfascasdfsdfsdf dfsjf sdlkfsadlfkasd fsf sdsdfasdflasdf',messageID: 2},
  // ]
  notifications: any[];
  constructor(private menuUserService: MenuUserService) { }

  getMessage() {
    console.log("bắt đầu lấy tin nhắn của người dùng");
    this.menuUserService.getMessages()
    .then(arrMessage => {
      console.log("đã nhận về mảng tin nhắn");
      console.log(arrMessage);      
      this.sumOfNotification= arrMessage.length;
      arrMessage.forEach(element => {
        console.log("element:")
        console.log(element);
      });
      this.notifications=arrMessage;
      console.log("notifications:")
      console.log(this.notifications);
    })
    .catch(e => console.log(e));
    // this.notifications= JSON.parse(jsonArray);
    // this.sumOfNotification= this.notifications.length;
    console.log("da lay tin nhan xong");
    // console.log(jsonArray);
    // console.log(notifications);
    // this.sumOfNotification = this.notifications.length;
    // console.log(this.sumOfNotification);
  }

  logOut() {
    console.log("đã loggedOut");

    console.log(
      deleteCookie("userToken")
    );
    console.log(getCookie("userToken"));
    deleteCookie("nickname");
    deleteCookie("userID");
    this.loggedOut.emit()
  }

  ngOnInit() {
    this.nickname = this.userName;
    this.getMessage();
  }

}
