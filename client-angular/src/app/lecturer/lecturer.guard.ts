import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { getCookie } from '../objects/Cookiee';

@Injectable()
export class LecturerGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (getCookie("userType") == "lecturer") {
      return true;
    } else {
      this.router.navigate(['page-not-found']);
      return false;
    }
  }
}
