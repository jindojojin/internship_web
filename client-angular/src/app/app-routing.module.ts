import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerListComponent } from './components/partner-list/partner-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { ProfilePageComponent } from './user/profile-page/profile-page.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRequireService } from './security_config/admin_require.service';
import { LecturerRequireService } from './security_config/lecturer_require.service';
import { PartnerRequireService } from './security_config/partner_require.service';
import { StudentRequireService } from './security_config/student_require.service';

// import { HomeComponent} from './user/home-page/home-page.component'

const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'partners', component: PartnerListComponent },
  // { path:'home',loadChildren: './user/user.module#UserModule'},
  { path: 'admin', canActivate: [AdminRequireService], loadChildren: './admin/admin.module#AdminModule' },
  { path: 'lecturer', canActivate: [LecturerRequireService], loadChildren: './lecturer/lecturer.module#LecturerModule' },
  { path: 'partner', canActivate: [PartnerRequireService], loadChildren: './partner/partner.module#PartnerModule' },
  { path: 'student', canActivate:[StudentRequireService], loadChildren: './student/student.module#StudentModule' },
  { path: '**', redirectTo: 'jobs', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  providers: [
    StudentRequireService,
    AdminRequireService,
    PartnerRequireService,
    LecturerRequireService
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }