import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { ManagePlanReportComponent } from './manage-plan-report/manage-plan-report.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentService } from './student.service';
import { ListFavoriteComponent } from './list-favorite/list-favorite.component';
import { ShareModule } from '../share/share.module';
import { OcticonsModule } from '../octicons/octicons.module';
import { NewPlanReportFormComponent } from './new-plan-report-form/new-plan-report-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LetPointForPlanreportModalComponent } from './manage-plan-report/let-point-for-planreport-modal/let-point-for-planreport-modal.component'
import { SendPartnerInfoToAdminComponent } from './send-partner-info-to-admin/send-partner-info-to-admin.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    ShareModule,
    OcticonsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [StudentComponent, ManagePlanReportComponent, ListFavoriteComponent, NewPlanReportFormComponent, LetPointForPlanreportModalComponent, SendPartnerInfoToAdminComponent],
  providers: [StudentService]
})
export class StudentModule { }
