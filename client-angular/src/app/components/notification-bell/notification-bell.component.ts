import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.css']
})
export class NotificationBellComponent implements OnInit {
  sumOfNotification:number=4;
  constructor() { }

  ngOnInit() {
  }

}
