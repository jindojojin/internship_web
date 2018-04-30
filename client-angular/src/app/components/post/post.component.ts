import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService],
})

export class PostComponent implements OnInit {
  @Input() index: number;

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
        this.job.outdated = res.listOfJobs[this.index].outdate;
        this.job.dayLeft = res.listOfJobs[this.index].dayLeft;
        this.job.jobTitle = res.listOfJobs[this.index].jobTitle;
        this.job.jobContent = res.listOfJobs[this.index].jobContent;
        this.job.partnerName = res.listOfJobs[this.index].partnerName;
        this.job.partnerLogo = res.listOfJobs[this.index].partnerLogo;
      })
      .catch(err => console.log(err));
  }
}
