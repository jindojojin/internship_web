import { Component, OnInit, Input } from '@angular/core';
import { getCookie } from '../../../objects/Cookiee';
// import { Partner } from '../../objects/Partner';


@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.css']
})
export class PartnerCardComponent implements OnInit {
  @Input() partnerName:string ;
  @Input() logoPartner:string;
  userType:string;
  constructor() {
  }

  ngOnInit() {
    this.userType=getCookie("userType");
  }

}
