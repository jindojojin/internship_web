import { Injectable } from '@angular/core';
// import { AuthenticationService } from './authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { getCookie } from '../objects/Cookiee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PartnerRequireService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if(getCookie("userType") == "partner") return true;
    else{
        this.redirectToLoginPage();
        return false;
    }
  }
  
  redirectToLoginPage() {
    this.router.navigate(['/home']);
}

}
