import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerListComponent } from './components/partner-list/partner-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { ProfilePageComponent } from './user/profile-page/profile-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LecturerListComponent } from './components/lecturer-list/lecturer-list.component';


import { HomePageComponent} from './user/home-page/home-page.component'
import { MessagePageComponent } from './user/message-page/message-page.component';
import { FormPartnerComponent } from './partner/form-partner/form-partner.component';
import { JobListByPartnerComponent } from './components/job-list-by-partner/job-list-by-partner.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/cac-bai-dang-thuc-tap/tat-ca/_', pathMatch: 'full' },
  { path: ':type/cac-bai-dang-thuc-tap/:typeOfKey/:keySearch', component: JobListComponent,runGuardsAndResolvers: 'always' },
  { path: 'profile/:username/:id', component: ProfilePageComponent },
  { path: ':type/cac-don-vi-doi-tac', component: PartnerListComponent },
  { path: ':type/cac-giang-vien', component: LecturerListComponent },
  { path: 'home',component: HomePageComponent},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'lecturer', loadChildren: './lecturer/lecturer.module#LecturerModule' },
  { path: 'partner', loadChildren: './partner/partner.module#PartnerModule' },
  { path: 'student', loadChildren: './student/student.module#StudentModule' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'tin-nhan', component: MessagePageComponent},
  { path: 'bai-dang/:title/:id' , component: FormPartnerComponent},
  { path: 'Cac-bai-dang/:partnerName/:partnerID' , component: JobListByPartnerComponent},
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  providers: [
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }