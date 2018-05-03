import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerComponent } from './lecturer.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListStudentFollowMeComponent } from './list-student-follow-me/list-student-follow-me.component';
import { ListPlanReportComponent } from './list-plan-report/list-plan-report.component';
const routes_Lecturer: Routes = [
  {
    path: 'lecturer',
    component: LecturerComponent ,
    children:[
      {
        path:"",
        redirectTo:"danh-sách-sinh-viên-đang-hướng-dẫn",
        pathMatch:'full'
      },
      {
        path:'danh-sách-sinh-viên-đang-hướng-dẫn',
        component: ListStudentComponent,
      },
      {
        path:'danh-sách-sinh-viên-đang-chờ',
        component: ListStudentFollowMeComponent,
      },
      {
        path:'xem-báo-cáo-của-sinh-viên',
        component: ListPlanReportComponent,
      }
    ]
  },
  {path: '**', redirectTo:'danh-sách-sinh-viên-đang-hướng-dẫn',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes_Lecturer)],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
