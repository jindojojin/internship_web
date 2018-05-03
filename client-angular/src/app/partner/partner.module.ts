import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner.component';
import { PartnerRoutingModule } from './partner-routing.module';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { AssessStudentComponent } from './assess-student/assess-student.component';

@NgModule({
  imports: [
    CommonModule,
    PartnerRoutingModule
  ],
  declarations: [PartnerComponent, AddNewPostComponent, ManagePostComponent, AssessStudentComponent]
})
export class PartnerModule { }
