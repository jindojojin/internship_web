import { Injectable } from '@angular/core';
// import { AuthenticationService } from './authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { getCookie } from '../objects/Cookiee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentRequireService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log("đã kiểm chứng sinh viên")
    if(getCookie("userType") == "student") return true;
    else{
        this.redirectToLoginPage();
        return false;
    }
  }
  
  redirectToLoginPage() {
    this.router.navigate(['/home']);
}

}
