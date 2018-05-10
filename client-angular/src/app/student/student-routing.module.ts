import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { ManageSkillComponent } from './manage-skill/manage-skill.component';
import { ManagePlanReportComponent } from './manage-plan-report/manage-plan-report.component';
import { StudentGuard } from './student.guard';
const routes_Student: Routes=[ {
    path: 'student',
    component: StudentComponent ,
    canActivate:[StudentGuard],
    children:[
      {
        path:"",
        redirectTo:"quản-lý-kỹ-năng-nghề-nghiệp",
        pathMatch:'full'
      },
      {
        path:'quản-lý-kỹ-năng-nghề-nghiệp',
        component: ManageSkillComponent,
      },
      {
        path:'quản-lý-báo-cáo-định-kỳ',
        component: ManagePlanReportComponent,
      },
      {
        path:'quản-lý-báo-cáo-toàn-văn',
        component: ManagePlanReportComponent,
      },
    ]
  },
  {path: '**', redirectTo:'quản-lý-kỹ-năng-nghề-nghiệp',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes_Student)],
  providers:[StudentGuard],
  exports: [RouterModule]
})

export class StudentRoutingModule { }