import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from './pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() maxPages: number=10;
  @Input() current: number;
  @Input() itemsPerPage: number;
  @Output() changePage = new EventEmitter();

  pages: any[] = [];
  pageModel: Page = {
    page: this.current,
    itemsPerPage: this.itemsPerPage
  };

  constructor() { }

  ngOnInit() {
    // this.maxPages=10;
    console.log(this.maxPages);
    if (this.maxPages) {
      this.createPages();
    }
  }

  setPage(page: number) {
    this.current = page;
    this.pageModel.page = page;
    this.pageModel.itemsPerPage = this.itemsPerPage;
    this.changePage.emit(this.pageModel);
  }

  createPages() {
    this.pages=[];
    for(let i=1; i <= this.maxPages; i++) {
      this.pages.push(i);
    }
  }
}