import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page',
  styleUrls: ['./page.component.less'],
  templateUrl: './page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {
}
