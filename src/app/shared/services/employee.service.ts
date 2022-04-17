import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Employee } from '../models';

export type EmployeePayload = Omit<Employee, 'guid' | 'email'>;

@Injectable()
export class EmployeeService {
  private employees = new BehaviorSubject<Employee[]>([]);
  employees$ = this.employees.asObservable();

  constructor(private http: HttpClient) { }

  fetch(): Observable<Employee[]> {
    return this.http.get<Employee[]>('employee').pipe(tap(response => this.employees.next(response)));
  }

  get(id: string): Observable<Employee> {
    return this.http.get<Employee>(`employee/${id}`);
  }

  create(payload: EmployeePayload): Observable<Employee> {
    return this.http.post<Employee>('employee', payload)
      .pipe(tap(response => this.employees.next([response, ...this.employees.value])));
  }

  update(payload: Employee): Observable<Employee> {
    return this.http.put<Employee>(`employee/${payload.guid}`, payload)
      .pipe(tap(() => {
        const employees = [...this.employees.value];
        const idx = employees.findIndex(e => e.guid === payload.guid);
        if (idx > -1) {
          employees.splice(idx, 1, payload);
        }
        this.employees.next(employees);
      }));
  }

  delete(id: string): Observable<Employee> {
    return this.http.delete<Employee>(`employee/${id}`)
      .pipe(tap(() => this.employees.next(this.employees.value.filter(e => e.guid !== id))));
  }
}
