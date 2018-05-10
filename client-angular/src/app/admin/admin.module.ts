import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module'
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { JobAssignmentComponent } from './job-assignment/job-assignment.component';
import { ManageInternshipTermComponent } from './manage-internship-term/manage-internship-term.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    AddUserComponent,
    ManageUserComponent,
    JobAssignmentComponent,
    ManageInternshipTermComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
