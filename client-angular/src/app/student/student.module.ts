import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { ManagePlanReportComponent } from './manage-plan-report/manage-plan-report.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentService } from './student.service';
import { ListFavoriteComponent } from './list-favorite/list-favorite.component';
import { ShareModule } from '../share/share.module';
import { OcticonsModule } from '../octicons/octicons.module';
import { PostComponent } from '../components/job-list/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    ShareModule,
    OcticonsModule
  ],
  declarations: [StudentComponent, ManagePlanReportComponent, ListFavoriteComponent],
  providers: [StudentService]
})
export class StudentModule { }
