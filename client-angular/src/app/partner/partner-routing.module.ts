import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerComponent } from './partner.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ListStudentFollowMeComponent } from '../lecturer/list-student-follow-me/list-student-follow-me.component';
import { AssessStudentComponent } from './assess-student/assess-student.component';
const routes_Partner: Routes = [
  {
    path: 'partner',
    component: PartnerComponent ,
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
  {path: '**', redirectTo:'thêm-bài-đăng-thực-tập',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes_Partner)],
  exports: [RouterModule]
})

export class PartnerRoutingModule { }
