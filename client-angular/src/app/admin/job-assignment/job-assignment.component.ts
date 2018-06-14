import { Component, OnInit, ViewChild } from '@angular/core';
import { JobAssignmentService } from './job-assignment.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-job-assignment',
  templateUrl: './job-assignment.component.html',
  styleUrls: ['./job-assignment.component.css'],
  providers: [JobAssignmentService]
})
export class JobAssignmentComponent implements OnInit {
  accounts: Object;
  lecturers: Object;
  studentID;
  lecturerID;
  type: string = "student";

  constructor(private jobAssignmentService: JobAssignmentService) { }

  ngOnInit() {
    this.onGetStudetnWithLecturer(1, this.numberOfRow);
  }

  onGetStudetnWithLecturer(start, total) {
    this.jobAssignmentService.getStudentWithLecturer(start, total)
      .then(res => {
        this.accounts = res.arr;
        this.total = res.total;
        this.numberOfPage = Math.ceil(this.total / this.numberOfRow);
        if (this.numberOfPage < 10)
          this.pagination.end = this.numberOfPage;
        this.pagination.createPages();

      })
      .catch(err => console.log(err))
  }

  onGetListLecturer(studentID) {
    this.studentID = studentID;
    this.jobAssignmentService.getAccounts("lecturer", 1, 10)
      .then(res => {
        this.lecturers = res;
        console.log(res);
      })
      .catch(err => console.log(err))
  }
  onSubmit(studentID, lecturerID) {
    console.log(lecturerID);
    console.log(studentID);
    this.jobAssignmentService.setLecturerForStudent(studentID, lecturerID)
      .then(res => {
        document.getElementById("closeModal").click();
        window.alert("Cập nhập thành công!");
        this.ngOnInit();
      })
      .catch(err => console.log(err))
  }

  setLecturer(lecturerID) {
    this.lecturerID = lecturerID;
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
    this.onGetStudetnWithLecturer(start, this.numberOfRow);
    this.pagination.start = (this.currentPage - 4 < 1) ? 1 : (this.currentPage - 4);
    this.pagination.end = (this.pagination.start + 9 > this.numberOfPage) ? (this.numberOfPage) : (this.pagination.start + 9); // hiển thị lại phân trang
    this.pagination.createPages();

  }
}
