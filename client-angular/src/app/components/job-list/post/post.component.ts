import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})

export class PostComponent implements OnInit {
  @Input() job;
  action: string = "follow";
  target: string = "job";
  targetID: string = "2";
  remainingDay:number;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.remainingDay = calculateDiffDays(this.job);
  }

  onFollow() {
    console.log("da chay");
    this.postService.follow(this.action, this.target, this.targetID)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

}

function calculateDiffDays(job) {
  var jobDate = job.endDate.split("-");
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var endDate = new Date(jobDate[0], jobDate[1] - 1, jobDate[2]);
  var today = new Date();
  var diffDays = Math.round((endDate.getTime() - today.getTime()) / (oneDay));
  // console.log(diffDays);
  return diffDays;
}
