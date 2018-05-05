import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerComponent } from './partner.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ListStudentFollowMeComponent } from '../lecturer/list-student-follow-me/list-student-follow-me.component';
import { AssessStudentComponent } from './assess-student/assess-student.component';
import { PartnerGuard } from './partner.guard';

const routes_Partner: Routes = [
  {
    path: 'partner',
    component: PartnerComponent ,
    canActivate:[PartnerGuard] ,
    children:[
      {
        path:"",
        redirectTo:"thêm-bài-đăng-thực-tập",
        pathMatch:'full'
      },
      {
        path:'thêm-bài-đăng-thực-tập',
        component: AddNewPostComponent,
      },
      {
        path:'quản-lý-các-bài-đăng-thực-tập',
        component: ManagePostComponent,
      },
      {
        path:'danh-sách-sinh-viên-đang-chờ',
        component: ListStudentFollowMeComponent,
      },
      {
        path:'đánh-giá-sinh-viên',
        component: AssessStudentComponent,
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes_Partner)],
  providers:[PartnerGuard],
  exports: [RouterModule]
})

export class PartnerRoutingModule { }
