import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageComponent } from '@app/pages/page';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
