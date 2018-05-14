import { Component, OnInit } from '@angular/core';
import { PartnerListService } from './partner-list.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css'],
  providers: [PartnerListService]
})

export class PartnerListComponent implements OnInit {
  partners: Object;
  // partners= [
  //   {name: "Toshiba",logo:"https://cdn.itviec.com/system/production/employers/logos/104/toshiba-software-development-viet-nam-co-ltd-logo-170-151.jpg?1496738781"},
  //   {name:"KMS Technology",logo:"https://itviec.com/system/production/employers/logos/31/kms-technology-logo-170-151.png?1454113898"},
  //   {name:"Evolable Asia",logo:"https://itviec.com/system/production/employers/logos/142/evolable-asia-logo-170-151.png?1503470624"},
  //   {name:"MISFIT",logo:"https://itviec.com/system/production/employers/logos/114/misfit-logo-170-151.jpg?1463630640"},
  //   {name:"MOSO",logo:"https://itviec.com/system/production/employers/logos/1217/moso-logo-170-151.png?1520837896"},
  //   {name:"Trusting Social",logo:"https://itviec.com/system/production/employers/logos/3862/trusting-social-logo-170-151.jpeg?1502359904"},
  //   {name:"FPT Software",logo:"https://itviec.com/system/production/employers/logos/100/fpt-software-logo-170-151.png?1459494092"},
  //   {name:"Ruby Development Vietnam",logo:"https://itviec.com/system/production/employers/logos/4305/ruby-development-vietnam-logo-170-151.jpg?1509531955"},
  //   {name:"CBA Solutions",logo:"https://itviec.com/system/production/employers/logos/1372/cba-solutions-logo-170-151.jpg?1506064791"}]

  constructor(private partnerListService: PartnerListService) { }

  ngOnInit() {
    this.partnerListService.getList()
      .then(res => {
        this.partners = res;
      })
      .catch(err => console.log(err));
  }

}
