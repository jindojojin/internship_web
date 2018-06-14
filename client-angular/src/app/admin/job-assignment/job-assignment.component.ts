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
}
