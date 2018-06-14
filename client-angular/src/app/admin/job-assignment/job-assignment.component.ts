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
  type: string = "student";

  constructor(private jobAssignmentService: JobAssignmentService) { }

  ngOnInit() {
    this.onGetAccounts(this.type);
    this.onGetStudetnWithLecturer(1, 10);
  }

  onGetAccounts(type: string) {
    this.type = type;
    this.jobAssignmentService.getAccounts(type, 1, 10)
      .then(res => {
        this.accounts = res;
        console.log(this.accounts);
      })
      .catch(err => console.log(err));
  }

  onGetStudetnWithLecturer(start, total) {
    this.jobAssignmentService.getStudentWithLecturer(start, total)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err))
  }
}
