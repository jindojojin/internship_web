import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LecturerService } from '../../lecturer/lecturer.service';

@Component({
  selector: 'app-new-plan-report-form',
  templateUrl: './new-plan-report-form.component.html',
  styleUrls: ['./new-plan-report-form.component.css']
})
export class NewPlanReportFormComponent implements OnInit {
  @Input() title: string;
  @Input() studentID: string;
  @Input() jobID:any;
  @Output() created = new EventEmitter();
  constructor(private lecturerService: LecturerService) { }
  onSubmit(formNewPlanReport) {
    if (formNewPlanReport.value.title == "") formNewPlanReport.value.title = this.title;
    formNewPlanReport.value.jobID= this.jobID;
    formNewPlanReport.value.studentID = this.studentID;
    console.log(formNewPlanReport.value);
    this.lecturerService.createNewPlanReportForStudent(this.studentID, formNewPlanReport.value).then(
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
  ngOnInit() {
    console.log(this.title);
  }

}
