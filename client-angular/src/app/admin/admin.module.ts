import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module'
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { MagageInternshipTermComponent } from './magage-internship-term/magage-internship-term.component';
import { JobAssignmentComponent } from './job-assignment/job-assignment.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AddUserComponent,
    ManageUserComponent,
    MagageInternshipTermComponent,
    JobAssignmentComponent
  ],
  exports:[AdminComponent]
})
export class AdminModule { }
