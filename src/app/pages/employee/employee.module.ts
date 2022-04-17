import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { EmployeeService, ShortNamePipeModule } from '@app/shared';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeManagementComponent } from './dialogs/employee-managment/employee-management.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeManagementComponent],
  imports: [
    NzIconModule,
    NzModalModule,
    NzInputModule,
    NzInputNumberModule,
    NzButtonModule,
    NzTableModule,
    NzFormModule,
    NzSpaceModule,
    NzDropDownModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    ShortNamePipeModule
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule {}
