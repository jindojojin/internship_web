import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { ManageSkillComponent } from './manage-skill/manage-skill.component';
import { ManagePlanReportComponent } from './manage-plan-report/manage-plan-report.component';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [StudentComponent, ManageSkillComponent, ManagePlanReportComponent]
})
export class StudentModule { }
