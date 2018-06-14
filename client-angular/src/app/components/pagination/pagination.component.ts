import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from './pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  current: number=1; // dùng để in đậm trang hiện tại
  @Output() changePage = new EventEmitter<number>();
  start:number=1;
  end:number=10;

  pages: any[] = [];

  constructor() { }

  ngOnInit() {
      this.createPages();
  }

  // setPage(page: number) {
  //   this.current = page;
  //   this.pageModel.page = page;
  //   this.pageModel.itemsPerPage = this.itemsPerPage;
  //   this.changePage.emit(this.pageModel);
  // }
  emitPage(page){
    this.current=page;
    page=parseInt(page);
    this.changePage.emit(page);
  }

  createPages() {
    this.pages=[];
    for(let i=this.start; i <= this.end; i++) {
      this.pages.push(i);
    }
  }
}