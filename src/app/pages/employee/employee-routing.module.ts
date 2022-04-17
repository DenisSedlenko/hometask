import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmployeeComponent } from './components/employee/employee.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
