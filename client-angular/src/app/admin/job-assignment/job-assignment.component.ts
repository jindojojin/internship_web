import { Component, OnInit } from '@angular/core';
import { JobAssignmentService } from './job-assignment.service';

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
    this.onGetStudetnWithLecturer(1, 10);
  }

  onGetStudetnWithLecturer(start, total) {
    this.jobAssignmentService.getStudentWithLecturer(start, total)
      .then(res => {
        this.accounts = res.arr;
      })
      .catch(err => console.log(err))
  }

  onGetListLecturer(studentID) {
    this.studentID = studentID;
    this.jobAssignmentService.getAccounts("lecturer", 1, 10)
      .then(res => {
        this.lecturers = res;
      })
      .catch(err => console.log(err))
  }
  onSubmit(studentID, lecturerID) {
    this.jobAssignmentService.setLecturerForStudent(studentID, lecturerID)
      .then(res => {
        document.getElementById("closeModal").click();
        this.ngOnInit();
        window.alert("Cập nhập thành công!");
       })
      .catch(err => console.log(err))
  }

  setLecturer(lecturerID) {
    this.lecturerID = lecturerID;
  }
}
