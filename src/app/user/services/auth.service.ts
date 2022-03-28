import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null | undefined = undefined;

  get isLoggedIn(): boolean {
    console.log(this.user);

    return !!this.user;
  }

  constructor(private http: HttpClient) {}

  register(data: {
    email: string;
    username: string;
    password: string;
    repass: string;
  }) {
    return this.http
      .post<IUser>(`http://localhost:3000/api/register`, data, {
        withCredentials: true,
      })
      .pipe(tap((user) => ((this.user = user), console.log(user))));
  }
}
