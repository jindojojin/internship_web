import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerListComponent } from './components/partner-list/partner-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { ProfilePageComponent } from './user/profile-page/profile-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


// import { HomeComponent} from './user/home-page/home-page.component'

const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'partners', component: PartnerListComponent },
  // { path:'home',loadChildren: './user/user.module#UserModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'lecturer', loadChildren: './lecturer/lecturer.module#LecturerModule' },
  { path: 'partner', loadChildren: './partner/partner.module#PartnerModule' },
  { path: 'student', loadChildren: './student/student.module#StudentModule' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  providers: [
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }