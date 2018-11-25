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

  // assessStudent(assession){
  //   const url = myWebsiteDomain+'/user/assess';
  //   return this.http.post(url,assession,{withCredentials:true})
  //   .toPromise()
  //     .then(r => {
  //       if (r.status = 201) { return true; } else { return false; }
  //     })
  //     .catch(e => {
  //       return false;
  //     });
  // }

  updateAssessStudent(assession) {
    let studentID = assession.studentID;
    const url = myWebsiteDomain + '/user/myAssess/studentID=' + studentID;
    return this.http.put(url, assession, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status = 201) { return true; } else { return false; }
      })
      .catch(e => {
        return false;
      });
  }

  getMyAssess(studentID) {
    const url = myWebsiteDomain + '/user/myAssession/studentID=' + studentID;
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status = 200) { return r.json(); } else { return false; }
      })
      .catch(e => {
        return false;
      });
  }

}
