import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { getCookie } from '../objects/Cookiee';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (getCookie("userType") == "admin") {
      return true;
    } else {
      this.router.navigate(['page-not-found']);
      return false;
    }
  }
}
