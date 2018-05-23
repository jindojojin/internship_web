import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';
import { getCookie } from '../../../objects/Cookiee';
import { spaceTojoin } from '../../../objects/regex';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})

export class PostComponent implements OnInit {
  @Input() job;
  userType:string;
  title_fixed:string;
  action: string = "follow";
  target: string = "job";
  targetID: string;
  remainingDay: number;
  jobContent: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.userType = getCookie("userType");
    this.jobContent = shortenJobContent(this.job.content, 300);
    this.remainingDay = calculateDiffDays(this.job);
    this.title_fixed = spaceTojoin(this.job.title);
    this.targetID = this.job.jobID;
    if (this.job.status = "followed") {
      this.action = "unfollow";
    } else {
      this.action = "follow";
    }
  }

  onFollow() {
    this.postService.follow(this.action, this.target, this.targetID)
      .then(res => {
        // console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  }
}

function shortenJobContent(content:string, length:number) {
  if (content.length > length) {
    return content.substring(0, length) + "...";
  }
  return content;
}

function calculateDiffDays(job) {
  var jobDate = job.endDate.split("-");
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var endDate = new Date(jobDate[0], jobDate[1] - 1, jobDate[2]);
  var today = new Date();
  var diffDays = Math.round((endDate.getTime() - today.getTime()) / (oneDay));
  return diffDays;
}
