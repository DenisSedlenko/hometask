import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MockInterceptor } from '@app/shared/interceptors/mock.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
  ]
})
export class SharedModule {}
