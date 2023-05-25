import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.css'],
})
export class AccountUserComponent {
  user!: User | undefined;

  constructor(private router: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.apiService.getUserById(parseInt(params['id'])).subscribe((data) => {
        this.user = data;
      });
    });
  }
}
