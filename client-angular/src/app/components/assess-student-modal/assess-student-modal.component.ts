import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-assess-student-modal',
  templateUrl: './assess-student-modal.component.html',
  styleUrls: ['./assess-student-modal.component.css']
})
export class AssessStudentModalComponent implements OnInit {
  studentID: string;
  studentName: string;
  assessorID: string;
  myAssession: string;

  constructor(private userService: UserService) { }
  showModal() {
    document.getElementById('btnOpenAssessStudentModal').click();
  }

  closeModal() {
    document.getElementById('CloseAssessStudentModal').click();
  }

  updateAssess(form) {
    this.userService.updateAssessStudent({
      assessorID: this.assessorID,
      studentID: this.studentID,
      comment: form.value.comment
    }).then(
      r => {
        this.closeModal();
      }
    ).catch(e => console.log(e))
  }

  getAssession(studentID) {
    this.studentID = studentID
    this.userService.getMyAssess(this.studentID)
      .then(res => {
        this.myAssession = res.comment;
        this.showModal();
      }
      ).catch(e => window.alert('đã có lỗi ở phía server!'))
  }
  ngOnInit() {
  }

}
