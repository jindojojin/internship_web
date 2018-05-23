import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { myWebsiteDomain } from '../../objects/appConfig';

@Injectable()
export class MessageModalService {

  constructor(private http: Http) { }

  sendMessage(value) {
    // console.log(value);
    let url = myWebsiteDomain + "/user/messages/action=send";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
    var body = JSON.stringify(value);
    // console.log("body");
    // console.log(body);

    return this.http.post(url, body, { withCredentials: true, headers: new Headers({ 'Content-Type': 'application/json' }) })
      .toPromise()
      .then(r => r.json());
  }
}
