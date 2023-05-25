import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-account-ui',
  templateUrl: './account-ui.component.html',
  styleUrls: ['./account-ui.component.css'],
})
export class AccountUiComponent {
  @Input() user!: User | undefined;
}
