import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { AccountUserComponent } from './components/feature/account-user/account-user.component';
import { AccountUiComponent } from './components/ui/account-ui/account-ui.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    AccountUserComponent,
    AccountUiComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
