import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import mates from './mates.json';
import { Employee } from '@app/shared';

const MOCK_DELAY = 200;

@Injectable({
  providedIn: 'root'
})
export class MockInterceptor implements HttpInterceptor {
  matesList = mates;

  intercept(request: HttpRequest<any>, _: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(
      delay(MOCK_DELAY),
      switchMap(() => {
        if (request.method === 'GET' && request.url === 'employee') {
          return this.handleGetEmployees();
        }

        if (request.method === 'POST' && request.url === 'employee') {
          return this.handlePostEmployee(request);
        }

        return of(new HttpResponse({
          body: null,
          status: 200,
          statusText: 'OK'
        }));
      })
    );
  }

  private handleGetEmployees(): Observable<HttpResponse<Employee[]>> {
    return of(new HttpResponse({
      body: mates,
      status: 200,
      statusText: 'OK'
    }));
  }

  private handlePostEmployee(request: HttpRequest<any>): Observable<HttpResponse<Employee>> {
    return of(new HttpResponse({
      body: {...request.body, guid: this.createGUID()},
      status: 200,
      statusText: 'OK'
    }));
  }

  private createGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }
}
