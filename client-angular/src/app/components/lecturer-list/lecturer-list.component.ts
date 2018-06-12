import { Component, OnInit } from '@angular/core';
import { LecturerListService } from './lecturer-list.service'
import { myWebsiteDomain } from '../../objects/appConfig';
import { StudentService } from '../../student/student.service';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.css'],
  providers: [LecturerListService]
})
export class LecturerListComponent implements OnInit {
  lecturers: Object;
  user;
  constructor(private lecturerListService: LecturerListService, private studentService : StudentService) { }
  server= myWebsiteDomain;
  follow(lecturerID,lecturerName){
    this.studentService.crudFollow("follow", "lecturer", lecturerID)
    .then(
      r => {
        if(r){
        let message = "Đã gửi đăng kí hướng dẫn thực tập tới giảng viên "+lecturerName +", bạn sẽ nhận được thông báo chấp nhận/ từ chối từ "+lecturerName;
        window.alert(message);
        this.ngOnInit();
        }else{
          window.alert("Bạn chỉ được phép chọn một giảng viên làm người hướng dẫn");
        }
      })
    .catch(e => {
      window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
    })
  }
  unfollow(lecturerID,lecturerName){
    this.studentService.crudFollow("unfollow", "lecturer", lecturerID)
    .then(
      r => {
        let message = "Đã bỏ theo dõi "+lecturerName;
        window.alert(message);
        this.ngOnInit();
      })
    .catch(e => {
      window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
    })
  }
  ngOnInit() {
    this.lecturerListService.getList(1, 9)
      .then(res => {
        // console.log(res);
        this.lecturers = res;
      })
      .catch(err => console.log(err));
  }

  // Pagination
  page;
  maxPages = 10;
  itemsPerPage = 9;
  currentPage = 1;
  pageChanged(event) {
    this.page = event.page;
    this.itemsPerPage = event.itemsPerPage
    this.loadPage(this.page, this.itemsPerPage);
  }

  loadPage(page: number, rows: number) {
    this.lecturerListService.getList((page - 1) * this.itemsPerPage + 1, rows)
      .then(res => {
        this.lecturers = res;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
