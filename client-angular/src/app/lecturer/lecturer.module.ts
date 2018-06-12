import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturerComponent } from './lecturer.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListStudentFollowMeComponent } from './list-student-follow-me/list-student-follow-me.component';
import { LecturerRoutingModule } from './lecturer-routing.module'
import { MessageModalComponent } from '../user/message-modal/message-modal.component';
import { UserModule } from '../user/user.module';
import { LecturerService } from './lecturer.service';
import { ShareModule } from '../share/share.module';
import { OverviewResultComponent } from './overview-result/overview-result.component';

@NgModule({
  imports: [
    CommonModule,
    LecturerRoutingModule,
    UserModule,
    ShareModule
  ],
  declarations: [LecturerComponent, 
    ListStudentComponent,
    ListStudentFollowMeComponent,
    OverviewResultComponent,
  ],
  providers:[LecturerService]
})
export class LecturerModule { }
