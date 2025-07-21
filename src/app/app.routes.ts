import { Routes } from '@angular/router';
import { EmployeeManage } from './EmployeeComponent/employee.component';

export const routes: Routes = [

   {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    component: EmployeeManage
  }
];
;
