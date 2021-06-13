import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailComponent } from './detail/detail.component';



const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard' 
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent,
    EmployeeComponent,
    DetailComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
}
)
export class AdminModule { }