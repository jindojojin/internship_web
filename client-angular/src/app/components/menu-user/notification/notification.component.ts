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
  constructor() { }

  ngOnInit() {
  }

}
