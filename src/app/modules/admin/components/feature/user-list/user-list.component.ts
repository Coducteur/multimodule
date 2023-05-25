import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users!: User[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
