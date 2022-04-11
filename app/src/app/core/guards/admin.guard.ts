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
export class AdminGuard implements CanActivate {
  constructor(private userService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const { hasToBeAdmin } = route.data;

    let userObj = JSON.parse(localStorage.getItem('user')!);

    console.log(
      hasToBeAdmin,
      userObj.user.isAdmin,
      JSON.parse(localStorage.getItem('user')!)
    );
    if (
      typeof hasToBeAdmin === 'boolean' &&
      hasToBeAdmin === userObj.user.isAdmin
    ) {
      return true;
    }

    return this.router.navigate(['/']);
  }
}
