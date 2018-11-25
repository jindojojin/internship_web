import { Component, OnInit, ViewChild } from '@angular/core';
import { LecturerListService } from './lecturer-list.service'
import { myWebsiteDomain } from '../../objects/appConfig';
import { StudentService } from '../../student/student.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.css'],
  providers: [LecturerListService]
})
export class LecturerListComponent implements OnInit {
  lecturers: Object;
  user;
  constructor(private lecturerListService: LecturerListService, private studentService: StudentService) { }
  server = myWebsiteDomain;
  follow(lecturerID, lecturerName) {
    this.studentService.crudFollow("follow", "lecturer", lecturerID)
      .then(
        r => {
          if (r) {
            let message = "Đã gửi đăng kí hướng dẫn thực tập tới giảng viên " + lecturerName + ", bạn sẽ nhận được thông báo chấp nhận/ từ chối từ " + lecturerName;
            window.alert(message);
            this.ngOnInit();
          } else {
            window.alert("Bạn chỉ được phép chọn một giảng viên làm người hướng dẫn");
          }
        })
      .catch(e => {
        window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
      })
  }
  unfollow(lecturerID, lecturerName) {
    this.studentService.crudFollow("unfollow", "lecturer", lecturerID)
      .then(
        r => {
          let message = "Đã bỏ theo dõi " + lecturerName;
          window.alert(message);
          this.ngOnInit();
        })
      .catch(e => {
        window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
      })
  }
  ngOnInit() {
    this.getListLecturer(1, this.numberOfRow);
  }

  getListLecturer(start, total) {
    this.lecturerListService.getList(start, total)
      .then(res => {
        this.lecturers = res;
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
    this.getListLecturer(start, this.numberOfRow);
    this.pagination.start = (this.currentPage - 4 < 1) ? 1 : (this.currentPage - 4);
    this.pagination.end = (this.pagination.start + 9 > this.numberOfPage) ? (this.numberOfPage) : (this.pagination.start + 9); // hiển thị lại phân trang
    this.pagination.createPages();

  }

}
