import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LecturerService } from '../../lecturer/lecturer.service';
import { getCookie } from '../../objects/Cookiee';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-plan-report-form',
  templateUrl: './new-plan-report-form.component.html',
  styleUrls: ['./new-plan-report-form.component.css']
})
export class NewPlanReportFormComponent implements OnInit {
  user;
  @Input() title: string;
  @Input() studentID: string;
  @Input() jobID:any;
  @Output() created = new EventEmitter();
  constructor(private lecturerService: LecturerService, private studentService: StudentService) { }
  onSubmit(formNewPlanReport) {
    if (formNewPlanReport.value.title == "") formNewPlanReport.value.title = this.title;
    formNewPlanReport.value.jobID= this.jobID;
    if(getCookie("userType")=="lecturer"){
      formNewPlanReport.value.studentID = this.studentID;
      this.lecturerService.createNewPlanReportForStudent(formNewPlanReport.value).then(
        r => {
          document.getElementById("closeNewPlanReportModalForm").click();
          if(r)
          this.created.emit(true);
          else this.created.emit(false)
        }
      ).catch(e => {
        document.getElementById("closeNewPlanReportModalForm").click();
        this.created.emit(false)
      });
    }else{
      formNewPlanReport.value.studentID = getCookie("userID");
      this.studentService.createNewPlanReportForStudent(formNewPlanReport.value).then(
        r => {
          document.getElementById("closeNewPlanReportModalForm").click();
          if(r)
          this.created.emit(true);
          else this.created.emit(false)
        }
      ).catch(e => {
        document.getElementById("closeNewPlanReportModalForm").click();
        this.created.emit(false)
      });
    }
    console.log(formNewPlanReport.value);
    
  }
  ngOnInit() {
    console.log(this.title);
  }

}
