import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { myWebsiteDomain } from '../objects/appConfig';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  changePassword(passwordObject) {
    const url = myWebsiteDomain + '/user/update/password';
    return this.http.put(url, passwordObject, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status = 201) { return true; } else { return false; }
      })
      .catch(e => {
        return false;
      });
  }

}
