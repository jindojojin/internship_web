import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-avatar',
  templateUrl: './overview-avatar.component.html',
  styleUrls: ['./overview-avatar.component.css']
})
export class OverviewAvatarComponent implements OnInit {
  avatar:string = "https://www.teqport.com/images/employees/lower_res/Placeholder_no_text.svg.png";
  userName: string ="TRẦN THỊ MINH NGUYỆT";
  constructor() { }

  ngOnInit() {
  }

}
