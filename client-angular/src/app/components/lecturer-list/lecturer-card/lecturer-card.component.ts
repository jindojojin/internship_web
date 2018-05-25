import { Component, OnInit, Input } from '@angular/core';
import { getCookie } from '../../../objects/Cookiee';
import { myWebsiteDomain } from '../../../objects/appConfig';

@Component({
  selector: 'app-lecturer-card',
  templateUrl: './lecturer-card.component.html',
  styleUrls: ['./lecturer-card.component.css']
})
export class LecturerCardComponent implements OnInit {
  @Input() lecturerName:string;
  @Input() lecturerAvatar:string;
  userType:string;

  constructor() { }

  ngOnInit() {
    this.userType= getCookie("userType");
    if(this.lecturerAvatar == myWebsiteDomain+"") {
      this.lecturerAvatar = "https://www.teqport.com/images/employees/lower_res/Placeholder_no_text.svg.png";
    }
  }

}
