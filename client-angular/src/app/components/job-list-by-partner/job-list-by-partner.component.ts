import { Component, OnInit } from '@angular/core';
import { JobListByPartnerService } from './job-list-by-partner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-list-by-partner',
  templateUrl: './job-list-by-partner.component.html',
  styleUrls: ['./job-list-by-partner.component.css'],
  providers: [JobListByPartnerService]
})
export class JobListByPartnerComponent implements OnInit {
  listJob: any[] = [];
  partnerName: string;

  constructor(private jobListByPartnerService: JobListByPartnerService, private route: ActivatedRoute) { }

  ngOnInit() {
    let partnerID = this.route.snapshot.paramMap.get('partnerID');
    this.partnerName = this.route.snapshot.paramMap.get('partnerName');
    this.jobListByPartnerService.getListJobByPartner(partnerID)
      .then(res => {
        this.listJob = res;
      })
  }
}