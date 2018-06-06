import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerComponent } from './lecturer.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListStudentFollowMeComponent } from './list-student-follow-me/list-student-follow-me.component';
import { LecturerGuard } from './lecturer.guard';
import { ManagePlanReportComponent } from '../student/manage-plan-report/manage-plan-report.component';
const routes_Lecturer: Routes = [
  {
    path: 'lecturer',
    component: LecturerComponent,
    canActivate: [LecturerGuard],
    children: [
      {
        path: "",
        redirectTo: "danh-sách-sinh-viên-đang-hướng-dẫn",
        pathMatch: 'full'
      },
      {
        path: 'danh-sách-sinh-viên-đang-hướng-dẫn',
        component: ListStudentComponent,
      },
      {
        path: 'danh-sách-sinh-viên-đang-chờ',
        component: ListStudentFollowMeComponent,
      },
      {
        path: 'xem-bao-cao-thuc-tap-cua-sinh-vien/:studentID',
        component: ManagePlanReportComponent,
      }
    ]
  },
  { path: '**', redirectTo: 'danh-sách-sinh-viên-đang-hướng-dẫn', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes_Lecturer)],
  providers: [LecturerGuard],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
