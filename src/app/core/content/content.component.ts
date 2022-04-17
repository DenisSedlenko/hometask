import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [`
        nz-content {
          margin: 16px;
        }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {
}
