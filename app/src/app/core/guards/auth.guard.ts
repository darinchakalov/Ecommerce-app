import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/user/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const { authenticationRequired, authenticationFailureRedirectUrl } =
      route.data;

    console.log(authenticationRequired, !!localStorage.getItem('user'));

    if (
      typeof authenticationRequired === 'boolean' &&
      authenticationRequired === !!localStorage.getItem('user')
    ) {
      return true;
    }

    let authRedirectUrl = authenticationFailureRedirectUrl;
    if (authenticationRequired) {
      const loginRedirectUrl = route.routeConfig?.path || '';
      authRedirectUrl += `?redirectUrl=/${loginRedirectUrl}`;
    }

    return this.router.parseUrl(authRedirectUrl || '/');
  }
}
