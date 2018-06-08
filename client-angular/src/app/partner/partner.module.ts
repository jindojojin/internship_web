import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner.component';
import { PartnerRoutingModule } from './partner-routing.module';
import { RouterModule } from '@angular/router';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { AssessStudentComponent } from './assess-student/assess-student.component';
import { FormPartnerComponent } from './form-partner/form-partner.component';
import { ShareModule } from '../share/share.module';
import { ListStudentFollowMeComponent } from './list-student-follow-me/list-student-follow-me.component';
import { UserModule } from '../user/user.module';
import { PartnerService } from './partner.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditInternshipJobComponent } from './edit-internship-job/edit-internship-job.component';


@NgModule({
  imports: [
    CommonModule,
    PartnerRoutingModule,
    ShareModule,
    UserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    PartnerComponent,
    AddNewPostComponent,
    ManagePostComponent,
    AssessStudentComponent,
    FormPartnerComponent,
    ListStudentFollowMeComponent,
    EditInternshipJobComponent
  ],
  exports: [PartnerComponent,
    FormPartnerComponent
  ],
  providers: [PartnerService],
})
export class PartnerModule { }
