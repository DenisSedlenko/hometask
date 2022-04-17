import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

import {
  ContentComponent,
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
  SidebarComponent
} from '@app/core';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CoreModule {}
