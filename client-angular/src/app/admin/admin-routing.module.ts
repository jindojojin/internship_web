import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { JobAssignmentComponent } from './job-assignment/job-assignment.component';
import { ManageInternshipTermComponent } from './manage-internship-term/manage-internship-term.component';
import { AdminGuard } from './admin.guard';

const routes_Admin: Routes = [
  {
    path: 'admin',
    component:AdminComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"",
        redirectTo:"thêm-tài-khoản",
        pathMatch:'full'
      },
      {
        path:'thêm-tài-khoản',
        component: AddUserComponent,
      },
      {
        path:'quản-lý-tài-khoản',
        component: ManageUserComponent,
      },
      {
        path:'quản-lý-các-đợt-thực-tập',
        component: ManageInternshipTermComponent,
      },
      {
        path:'phân-công-giảng-viên',
        component: JobAssignmentComponent,
      }
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes_Admin)],
  providers:[AdminGuard],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
