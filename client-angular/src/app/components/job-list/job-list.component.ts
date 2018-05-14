import { Component, OnInit } from '@angular/core';
import { JobListService } from './job-list.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  providers: [JobListService]
})

export class JobListComponent implements OnInit {
  jobs: Object;

  constructor(private jobListService: JobListService) { }

  ngOnInit() {
    this.jobListService.getList()
      .then(res => {
        this.jobs = res;
      })
      .catch(err => console.log(err));
  }
}
