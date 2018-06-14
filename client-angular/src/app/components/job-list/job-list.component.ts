import { Component, OnInit, ViewChild } from '@angular/core';
import { JobListService } from './job-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';

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
    this.getData(1, this.numberOfRow);
  }

  getData(start, total) {
    let type = this.route.snapshot.paramMap.get("type");
    console.log(type);

    if (type == "Trang-chu")
      this.jobListService.getList(start, total)
        .then(res => {
          this.jobs = res;
          this.total = res[0].total;
          this.numberOfPage = Math.ceil(this.total / this.numberOfRow);
          if (this.numberOfPage < 10)
          this.pagination.end = this.numberOfPage;
          this.pagination.createPages();
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
  @ViewChild(PaginationComponent) pagination: PaginationComponent;
  numberOfPage; // tổng số trang có thể có
  numberOfRow = 10 // số hàng xuất hiện trong bảng
  total: number; // tổng người dùng => dùng để phân trang 
  currentPage: number; // trang hiện tại
  pageChanged(pageNumber) {
    pageNumber = parseInt(pageNumber);
    this.currentPage = pageNumber;
    let start = (pageNumber - 1) * this.numberOfRow + 1;
    this.getData(start, this.numberOfRow);
    this.pagination.start = (this.currentPage - 4 < 1) ? 1 : (this.currentPage - 4);
    this.pagination.end = (this.pagination.start + 9 > this.numberOfPage) ? (this.numberOfPage) : (this.pagination.start + 9); // hiển thị lại phân trang
    this.pagination.createPages();

  }
}
