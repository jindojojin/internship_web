import { Component, OnInit,Input } from '@angular/core';
import { Message } from '../../objects/Messgase';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {
  sumOfNotification:number=3;
  @Input() userName:string;
  nickname:string = "Trần Quang Linh";
  notifications: Message[] = [
    {senderName : "linh", title: "day la mot thong bao",content:'dfascasdfsdfsdf dfsjf sdlkfsadlfkasd fsf sdsdfasdflasdf',messageID: 2},
    {senderName : "linadsfash", title: "day la mot thondsfasfsdg bao",content:'dfascasdfsdfadfsfasdfsdlkfsadlfkasd fsf sdsdfasdflasdf',messageID: 4},
    {senderName : "linh", title: "day la mot thong bao daiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",content:'đoạn văn này rất là dài, dài đến mức ai đọc cũng phải điên đầu lên vì quá dài và còn nhảm :3 dfascasdfsdfsdf dfsjf sdlkfsadlfkasd fsf sdsdfasdflasdf',messageID: 2},
  ]
  constructor() { }

  ngOnInit() {
    this.nickname= this.userName;
  }

}
