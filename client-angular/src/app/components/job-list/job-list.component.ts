import { Component, OnInit } from '@angular/core';
import { JobListService } from './job-list.service';
import { myWebsiteDomain } from '../../objects/appConfig';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  providers: [JobListService]
})

export class JobListComponent implements OnInit {
  jobs: Object;
  searchResultIsEmpty: boolean;
  constructor(private jobListService: JobListService, private route: ActivatedRoute, private router: Router) { 
  }
  reload(){
    this.ngOnInit();
  }

  ngOnInit() {
    // console.log("da vao ng onladflkadjf của list job");    
    let type = this.route.snapshot.paramMap.get("type");
    console.log(type);
    
    if (type == "Trang-chu")
      this.jobListService.getList()
        .then(res => {
          this.jobs = res;
        })
        .catch(err => console.log(err));
    else if(type == "Tim-kiem") {
      let keySearch = this.route.snapshot.paramMap.get("keySearch");
      let typeOfKey = this.route.snapshot.paramMap.get("typeOfKey");
      console.log(keySearch);
      this.jobListService.searchForJob({keySearch:keySearch,typeOfKey:typeOfKey})
      .then(res => {
        if(res[0] == undefined)
        this.searchResultIsEmpty = true;
        this.jobs = res;
      })
      .catch(err => console.log(err));
    } else{
      this.router.navigate(['page-not-found']);
    }
  }
}
