import { Injectable, inject } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if(this.authService.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;  
  } 
      
}


// }

// const isAuthenticated = (): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   return authService.isAuthenticated$.pipe(
//       take(1),
//       tap((isAuthenticated: boolean) => {
//           if (!isAuthenticated) {
//               this.router.navigate(['/account/login']);
//           }
//       }),
//   );
// }

// const canActivate:CanActivateFn = isAuthenticated;
// const canMatch:CanMatchFn = isAuthenticated;
