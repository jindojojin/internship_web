import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService],
})

export class PostComponent implements OnInit {
  outdated: boolean;
  dayLeft: number;
  jobTitle: string;
  jobContent: string;
  partnerName: string;
  partnerLogo: string;
  
  job = {
    outdated: "",
    dayLeft: "",
    jobTitle: "",
    jobContent: "",
    partnerName: "",
    partnerLogo: ""
  };

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPost()
      .then(res => {
        this.job.outdated = res.listOfJobs[1].outdate;
        this.job.dayLeft = res.listOfJobs[1].dayLeft;
        this.job.jobTitle = res.listOfJobs[1].jobTitle;
        this.job.jobContent = res.listOfJobs[1].jobContent;
        this.job.partnerName = res.listOfJobs[1].partnerName;
        this.job.partnerLogo = res.listOfJobs[1].partnerLogo;
        // this.outdated = res.listOfJobs[1].outdate;
        // this.dayLeft = res.listOfJobs[1].dayLeft;
        // this.jobTitle = res.listOfJobs[1].jobTitle;
        // this.jobContent = res.listOfJobs[1].jobContent;
        // this.partnerName = res.listOfJobs[1].partnerName;
        // this.partnerLogo = res.listOfJobs[1].partnerLogo;
      })
      .catch(err => console.log(err));
      console.log(this.job);
  }
}
