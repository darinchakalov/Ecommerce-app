import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementCounter } from './+store/actions';
import { AuthService } from './user/services/auth.service';
import { selectGlobalCounter } from './+store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  counter$ = this.store.select(selectGlobalCounter);

  constructor(private userService: AuthService, private store: Store<any>) {
    this.userService.getUserInfo().subscribe({
      error: () => {
        this.userService.user = null;
      },
    });
  }

  incrementCounter(): void {
    this.store.dispatch(incrementCounter());
  }
}
