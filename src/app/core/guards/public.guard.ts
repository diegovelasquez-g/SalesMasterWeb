import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { inject } from '@angular/core';

const checkAuthStatus = (): boolean | Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) => {
      if (isAuthenticated) {
        router.navigate(['/dashboard']);
      }
    }),
    map((isAuthenticated) => !isAuthenticated)
  );
};

export const canActivatePublicGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return checkAuthStatus();
};

export const canMatchPublicGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return checkAuthStatus();
};
