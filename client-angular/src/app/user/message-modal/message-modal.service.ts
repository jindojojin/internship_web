import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { myWebsiteDomain } from '../../objects/appConfig';

@Injectable()
export class MessageModalService {

  constructor(private http: Http) { }

  sendMessage(value,sendNew) {
    // console.log(value);
    let url =(sendNew=="true")?(myWebsiteDomain + "/user/messages/action=send"): (myWebsiteDomain+"/user/messages/action=reply");
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
    var body = JSON.stringify(value);
    // console.log("body");
    // console.log(body);

    return this.http.post(url, body, { withCredentials: true, headers: new Headers({ 'Content-Type': 'application/json' }) })
      .toPromise()
      .then(r => {
        console.log(r);
        if(r.status == 201) return true;
        return false;
      })
      .catch(e => {
        console.log(e);
        return false;
      })
  }
}
