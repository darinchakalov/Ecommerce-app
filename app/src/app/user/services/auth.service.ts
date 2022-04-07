import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { clearUserState, setUser } from '../+store/actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null | undefined = undefined;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient, private store: Store) {}

  login(data: { email: string; password: string }) {
    return this.http
      .post<IUser>(`/api/login`, data)
      .pipe(
        tap(
          (user) => (
            (this.user = user), this.store.dispatch(setUser({ user: user }))
          )
        )
      );
  }

  register(data: {
    email: string;
    username: string;
    password: string;
    repass: string;
  }) {
    return this.http
      .post<IUser>(`/api/register`, data)
      .pipe(
        tap(
          (user) => (
            (this.user = user), this.store.dispatch(setUser({ user: user }))
          )
        )
      );
  }

  logout() {
    return this.http
      .post<IUser>(`/api/logout`, {})
      .pipe(
        tap(() => ((this.user = null), this.store.dispatch(clearUserState())))
      );
  }

  getUserInfo() {
    return this.http
      .get<IUser>(`/api/users/profile`)
      .pipe(tap((user) => (this.user = user)));
  }
}
