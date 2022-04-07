import { Component } from '@angular/core';
import { AuthService } from './user/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  constructor(private userService: AuthService) {
    this.userService.getUserInfo().subscribe({
      error: () => {
        this.userService.user = null;
      },
    });
  }
}
