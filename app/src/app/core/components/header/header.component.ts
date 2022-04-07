import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/user/services/auth.service';
import { selectGlobalCounter } from 'src/app/+store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLogged(): boolean {
    return this.userService.isLoggedIn;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  counter$ = this.store.select(selectGlobalCounter);

  constructor(
    private userService: AuthService,
    private router: Router,
    private store: Store<any>
  ) {}

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
