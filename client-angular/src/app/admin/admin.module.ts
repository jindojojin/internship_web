import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminToolsComponent } from './admin-tools/admin-tools.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent, AdminToolsComponent],
  exports:[
    AdminToolsComponent
  ]
})
export class AdminModule { }
