import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../objects/Messgase';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() senderName:String;
  @Input() title:String;
  @Input() content: String;
  titlefixed:String;
  contentfixed:String;
  
  constructor() {}

  ngOnInit() {
    console.log(this.senderName.length);
    this.titlefixed = (this.title.length <= 20) ? (this.title):(this.title.substring(0,20)+' ...');
    this.contentfixed= (this.content.length <= 40) ? (this.content):(this.content.substring(0,40)+' ...');
  }

}
