import { Component } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: IUser | undefined;

  constructor(private userService: AuthService) {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUserInfo().subscribe((user) => (this.user = user));
  }
}
