import { Component, OnInit, ViewChild } from '@angular/core';
import { PartnerListService } from './partner-list.service';
import { myWebsiteDomain } from '../../objects/appConfig';
import { StudentService } from '../../student/student.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css'],
  providers: [PartnerListService]
})

export class PartnerListComponent implements OnInit {
  user;
  partners: Object;
  server = myWebsiteDomain;
  constructor(private partnerListService: PartnerListService, private studentService: StudentService) { }
  follow(partnerID, partnerName) {
    this.studentService.crudFollow("follow", "partner", partnerID)
      .then(
        r => {
          let message = "Đã thêm " + partnerName + " vào danh sách yêu thích, bạn sẽ nhận được các thông báo mới nhất từ " + partnerName;
          window.alert(message);
          this.ngOnInit();
        })
      .catch(e => {
        window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
      })
  }
  unfollow(partnerID, partnerName) {
    this.studentService.crudFollow("unfollow", "partner", partnerID)
      .then(
        r => {
          let message = "Đã bỏ theo dõi " + partnerName;
          window.alert(message);
          this.ngOnInit();
        })
      .catch(e => {
        window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
      })
  }
  ngOnInit() {
    this.getListPartner(1, this.numberOfRow);
  }
  getListPartner(start, total) {
    this.partnerListService.getList(start, total)
      .then(res => {
        this.partners = res;
        this.total = res[0].total;
        this.numberOfPage = Math.ceil(this.total / this.numberOfRow);
        if (this.numberOfPage < 10)
          this.pagination.end = this.numberOfPage;
        this.pagination.createPages();
      })
      .catch(err => console.log(err));
  }

  // Pagination
  @ViewChild(PaginationComponent) pagination: PaginationComponent;
  numberOfPage; // tổng số trang có thể có
  numberOfRow = 12 // số hàng xuất hiện trong bảng
  total: number; // tổng người dùng => dùng để phân trang 
  currentPage: number; // trang hiện tại
  pageChanged(pageNumber) {
    pageNumber = parseInt(pageNumber);
    this.currentPage = pageNumber;
    let start = (pageNumber - 1) * this.numberOfRow + 1;
    this.getListPartner(start, this.numberOfRow);
    this.pagination.start = (this.currentPage - 4 < 1) ? 1 : (this.currentPage - 4);
    this.pagination.end = (this.pagination.start + 9 > this.numberOfPage) ? (this.numberOfPage) : (this.pagination.start + 9); // hiển thị lại phân trang
    this.pagination.createPages();

  }
}
