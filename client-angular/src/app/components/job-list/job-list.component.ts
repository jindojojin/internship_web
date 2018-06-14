import { Component, OnInit } from '@angular/core';
import { JobListService } from './job-list.service';
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
  reload() {
    this.ngOnInit();
  }

  ngOnInit() {
    let type = this.route.snapshot.paramMap.get("type");
    console.log(type);

    if (type == "Trang-chu")
      this.jobListService.getList(1, 10)
        .then(res => {
          this.jobs = res;
          console.log(this.jobs);
        })
        .catch(err => console.log(err));
    else if (type == "Tim-kiem") {
      let keySearch = this.route.snapshot.paramMap.get("keySearch");
      let typeOfKey = this.route.snapshot.paramMap.get("typeOfKey");
      console.log(keySearch);
      this.jobListService.searchForJob({ keySearch: keySearch, typeOfKey: typeOfKey })
        .then(res => {
          if (res[0] == undefined)
            this.searchResultIsEmpty = true;
          this.jobs = res;
        })
        .catch(err => console.log(err));
    } else {
      this.router.navigate(['page-not-found']);
    }
  }

  // Pagination
  page;
  maxPages = 10;
  itemsPerPage = 10;
  currentPage = 1;
  pageChanged(event) {
    this.page = event.page;
    this.itemsPerPage = event.itemsPerPage
    this.loadPage(this.page, this.itemsPerPage);
  }

  loadPage(page: number, rows: number) {
    this.jobListService.getList((page - 1) * this.itemsPerPage + 1, rows)
      .then(res => {
        this.jobs = res;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
