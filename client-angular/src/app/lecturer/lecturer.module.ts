import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturerComponent } from './lecturer.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListPlanReportComponent } from './list-plan-report/list-plan-report.component';
import { ListStudentFollowMeComponent } from './list-student-follow-me/list-student-follow-me.component';
import { LecturerRoutingModule } from './lecturer-routing.module'

@NgModule({
  imports: [
    CommonModule,
    LecturerRoutingModule
  ],
  declarations: [LecturerComponent, 
    ListStudentComponent,
    ListPlanReportComponent,
    ListStudentFollowMeComponent
  ]
})
export class LecturerModule { }
