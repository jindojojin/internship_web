import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service'

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  providers: [PostService]
})
export class JobListComponent implements OnInit {
  lengthOfList: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPost()
      .then(res => {
        this.lengthOfList = res.lengthOfList;
      })
      .catch(err => console.log(err));
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 0; i < number; i++){
       items.push(i);
    }
    return items;
  }
}
