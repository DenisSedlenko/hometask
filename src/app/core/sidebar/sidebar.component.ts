import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Navigation {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  collapsed = new BehaviorSubject<boolean>(false);

  navigation: Navigation[] = [
    {
      url: '/employee',
      name: 'Сотрудники',
      icon: 'team'
    }
  ]
}
