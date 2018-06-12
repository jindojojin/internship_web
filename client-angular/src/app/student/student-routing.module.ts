import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { ManagePlanReportComponent } from './manage-plan-report/manage-plan-report.component';
import { StudentGuard } from './student.guard';
import { ListFavoriteComponent } from './list-favorite/list-favorite.component';
const routes_Student: Routes = [ {
    path: 'student',
    component: StudentComponent ,
    canActivate: [StudentGuard],
    children: [
      {
        path: '',
        redirectTo: 'quan-ly-bao-cao',
        pathMatch: 'full'
      },
      {
        path: 'danh-sach-theo-doi',
        component: ListFavoriteComponent,
      },
      {
        path: 'quan-ly-bao-cao',
        component: ManagePlanReportComponent,
      },
      {
        path: 'gui-yeu-cau-xac-nhan-cong-ty',
        component: ManagePlanReportComponent,
      },
    ]
  },
  {path: '**', redirectTo: 'quan-ly-bao-cao-dinh-ky', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes_Student)],
  providers: [StudentGuard],
  exports: [RouterModule]
})

export class StudentRoutingModule { }
