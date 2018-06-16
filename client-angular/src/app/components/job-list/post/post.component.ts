import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';
import { getCookie } from '../../../objects/Cookiee';
import { spaceTojoin, calculateDiffDays } from '../../../objects/regex';
import { myWebsiteDomain } from '../../../objects/appConfig';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})

export class PostComponent implements OnInit {
  @Input() job;
  server = myWebsiteDomain;
  userType: string;
  title_fixed: string;
  action: string = "follow";
  target: string = "job";
  targetID: string;
  remainingDay: number;
  jobContent: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.userType = getCookie("userType");
    this.jobContent = shortenJobContent(this.job.content, 300);
    console.log(this.job);
    this.remainingDay = calculateDiffDays(this.job, undefined);
    this.title_fixed = spaceTojoin(this.job.title);
    this.targetID = this.job.jobID;
    if (this.job.status == "followed") {
      this.action = "unfollow";
    } else {
      this.action = "follow";
    }
  }

  onFollow() {
    this.postService.follow(this.action, this.target, this.targetID)
      .then(res => {
        this.action = (this.action == 'follow') ? 'unfollow' : 'follow';
      })
      .catch(err => console.log(err));
  }
}

function shortenJobContent(content: string, length: number) {
  if (content.length > length) {
    return content.substring(0, length) + "...";
  }
  return content;
}

