import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
// import { AdminToolsComponent } from './admin-tools/admin-tools.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
// import { MagageInternshipTermComponent } from './magage-internship-term/magage-internship-term.component';
import { JobAssignmentComponent } from './job-assignment/job-assignment.component';
import { ManageIntershipTermComponent } from './manage-intership-term/manage-intership-term.component';

const routes_Admin: Routes = [
  {
    path: 'admin',
    component:AdminComponent,
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
        component: ManageIntershipTermComponent,
      },
      {
        path:'phân-công-giảng-viên',
        component: JobAssignmentComponent,
      }
    ]
  },
  {path: '**', redirectTo:'thêm-tài-khoản',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes_Admin)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
