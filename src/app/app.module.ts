import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';

import { CoreModule, LayoutComponent } from '@app/core';
import { SharedModule } from '@app/shared';

import { AppRoutingModule } from '@app/app-routing.module';

registerLocaleData(en);

@NgModule({
  imports: [BrowserAnimationsModule, CoreModule, SharedModule, AppRoutingModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
