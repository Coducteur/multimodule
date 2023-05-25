import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserCardComponent } from './components/ui/user-card/user-card.component';
import { UserListComponent } from './components/feature/user-list/user-list.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    UserCardComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
