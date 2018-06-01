import { Component, OnInit } from '@angular/core';
import { PartnerListService } from './partner-list.service';
import { myWebsiteDomain } from '../../objects/appConfig';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css'],
  providers: [PartnerListService]
})

export class PartnerListComponent implements OnInit {
  partners: Object;
 server = myWebsiteDomain;
  constructor(private partnerListService: PartnerListService) { }

  ngOnInit() {
    this.partnerListService.getList()
      .then(res => {
        this.partners = res;
        console.log(this.partners);
      })
      .catch(err => console.log(err));
  }

}
