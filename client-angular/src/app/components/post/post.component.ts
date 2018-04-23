import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  outdate:boolean=true;
  dayleft:number=5;
  jobTitle:string="Big Data Engineer - Up to $4000";
  jobContent:string='Install Operating system, deploy middleware and application components using automated deployment scripts and tools Monitor Operating system, Hadoop cluster, middleware, and Application using deployed monitoring tools Administer Operating system, Middleware, Hadoop cluster and application components using predefined run books Upgrade operating system, Middleware and Application components as needed following change management processes as defined by the partnerPerform incident management, problem management, change management and SLA management functions';
  partnerName:string="Trusting Social";
  partnerLogo:string="https://cdn.itviec.com/system/production/employers/logos/3862/trusting-social-logo-170-151.jpeg?1502359904";
  constructor() { }

  ngOnInit() {
  }

}
