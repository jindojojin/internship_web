import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService],
})
export class PostComponent implements OnInit {
  outdate: boolean;
  dayLeft: number;
  jobTitle: string;
  jobContent: string;
  partnerName: string;
  partnerLogo: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPost()
      .then(res => {
        this.outdate = res.outdate;
        this.dayLeft = res.dayLeft;
        this.jobTitle = res.jobTitle;
        this.jobContent = res.jobContent;
        this.partnerName = res.partnerName;
        this.partnerLogo = res.partnerLogo;
      })
      .catch(err => console.log(err));
  }
}
