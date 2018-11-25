import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerComponent } from './partner.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { AssessStudentComponent } from './assess-student/assess-student.component';
import { PartnerGuard } from './partner.guard';
import { ListStudentFollowMeComponent } from './list-student-follow-me/list-student-follow-me.component';
import { EditInternshipJobComponent } from './edit-internship-job/edit-internship-job.component';

const routes_Partner: Routes = [
  {
    path: 'partner',
    component: PartnerComponent,
    canActivate: [PartnerGuard],
    children: [
      {
        path: "",
        redirectTo: "quan-ly-bai-dang",
        pathMatch: 'full'
      },
      {
        path: 'quan-ly-bai-dang',
        component: ManagePostComponent,
      },
      {
        path: 'tao-bai-dang-thuc-tap',
        component: AddNewPostComponent,
      },
      {
        path: 'chinh-sua-bai-dang/:jobID',
        component: EditInternshipJobComponent,
      },
      {
        path: 'danh-sach-sinh-vien-dang-ky',
        component: ListStudentFollowMeComponent,
      },
      {
        path: 'quan-ly-thuc-tap-sinh',
        component: AssessStudentComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes_Partner)],
  providers: [PartnerGuard],
  exports: [RouterModule]
})

export class PartnerRoutingModule { }
