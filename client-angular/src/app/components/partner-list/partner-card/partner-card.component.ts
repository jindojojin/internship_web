import { Component, OnInit, Input } from '@angular/core';
import { getCookie } from '../../../objects/Cookiee';
import { myWebsiteDomain } from '../../../objects/appConfig';
// import { Partner } from '../../objects/Partner';


@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.css']
})
export class PartnerCardComponent implements OnInit {
  @Input() partnerName:string;
  @Input() logoPartner:string;
  @Input() partnerID:string;
  userType:string;
  server:string = myWebsiteDomain;
  constructor() {
  }

  ngOnInit() {
    this.userType=getCookie("userType");
    if(this.logoPartner == myWebsiteDomain+"") {
      this.logoPartner = "https://www.teqport.com/images/employees/lower_res/Placeholder_no_text.svg.png";
    }
  }

}
