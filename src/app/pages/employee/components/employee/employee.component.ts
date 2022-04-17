import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Employee, EmployeeName, EmployeePayload, EmployeeService } from '@app/shared';

import { EmployeeManagementComponent } from '../../dialogs/employee-managment/employee-management.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {
  headers = ['', 'Фото', 'Имя', 'Фамилия', 'Возраст', ''];

  employees$: Observable<Employee[]> | null = null;

  constructor(
    private modalService: NzModalService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeService.fetch().subscribe();
    this.employees$ = this.employeeService.employees$;
  }

  createEmployee(): void {
    this.modalService.create({
      nzTitle: 'Создать карточку нового сотрудника',
      nzContent: EmployeeManagementComponent,
      nzComponentParams: {
        type: 'create'
      }
    }).afterClose
      .pipe(
        map(this.prepareEmployee),
        mergeMap(result => this.employeeService.create(result as EmployeePayload))
      )
      .subscribe();
  }

  update(employee: Employee): void {
    this.modalService.create({
      nzTitle: 'Редактирование карточки сотрудника',
      nzContent: EmployeeManagementComponent,
      nzComponentParams: {
        type: 'edit',
        employee
      }
    }).afterClose
      .pipe(
        map(result => ({ ...employee, ...this.prepareEmployee(result) })),
        mergeMap(result => this.employeeService.update(result))
      )
      .subscribe();
  }

  delete(employee: Employee): void {
    this.employeeService.delete(employee.guid).subscribe();
  }

  trackByFn(_: number, item: Employee): string {
    return item?.guid;
  }

  private prepareEmployee({ first, last, age}: EmployeeName & { age: number }): Partial<Employee> {
    return {
      age,
      name: {
        first,
        last
      }
    };
  }
}
