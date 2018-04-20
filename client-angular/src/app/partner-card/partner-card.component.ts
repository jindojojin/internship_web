import { Component, OnInit } from '@angular/core';
import {Icon} from 'octicons'

@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.css']
})
export class PartnerCardComponent implements OnInit {
  partnerName:string= "VNG CORP operation";
  logoPartner:string = "https://itviec.com/system/production/employers/logos/31/kms-technology-logo-170-151.png?1454113898";
  constructor() { }

  ngOnInit() {
  }

}
