import { Component, OnInit, ViewChild } from '@angular/core';
import { LecturerService } from '../lecturer.service';
import { AssessStudentModalComponent } from '../../components/assess-student-modal/assess-student-modal.component';
import { getCookie } from '../../objects/Cookiee';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  myStudents: any[] = [
    {
      name: "trần quang linh",
      studentCode: "16021031",
      vnumail: "16021031@vnu.edu.vn"
    },
    {
      name: "trần quang lanh",
      studentCode: "16021021",
      vnumail: "16021021@vnu.edu.vn"
    },
    {
      name: "trần quang lĩnh",
      studentCode: "16021033",
      vnumail: "16021033@vnu.edu.vn"
    },
    {
      name: "trần quang linh",
      studentCode: "16021031",
      vnumail: "16021031"
    },
  ]
  constructor(private lecturerService: LecturerService) { }



  ngOnInit() {
    this.lecturerService.getListStudent()
      .then(r => {
        if (r != false) {
          this.myStudents = r;
        }
      })
  }
  @ViewChild(AssessStudentModalComponent)
  assessionModal: AssessStudentModalComponent;

  writeAssession(studentName, studentID) {
    this.assessionModal.assessorID = getCookie("userID");
    this.assessionModal.studentName = studentName;
    this.assessionModal.getAssession(studentID);
    // this.assessionModal.showModal();
  }

}
