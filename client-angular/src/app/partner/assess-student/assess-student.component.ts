import { Component, OnInit, ViewChild } from '@angular/core';
import { PartnerService } from '../partner.service';
import { AssessStudentModalComponent } from '../../components/assess-student-modal/assess-student-modal.component';
import { getCookie } from '../../objects/Cookiee';

@Component({
  selector: 'app-assess-student',
  templateUrl: './assess-student.component.html',
  styleUrls: ['./assess-student.component.css']
})
export class AssessStudentComponent implements OnInit {
  myStudents: any[] = [];
  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.partnerService.getStudentWorking().then(r=>{
      if(r!=false){
        console.log(r);
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
