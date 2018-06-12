import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { myWebsiteDomain } from '../../objects/appConfig';
import { getCookie } from '../../objects/Cookiee';

@Injectable()
export class MessagePageService {

  constructor(private http: Http) { }

  getMessages() {
    // console.log("da vao service lấy message")
    let userID = getCookie("userID")
    var url = myWebsiteDomain + '/user/messagesGroupBySender';
    // const body = JSON.stringify(value);
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(res => {
        return res.json()
      }).catch(e => false);
  }

  markMessageAsRead(messageID) {
    let url = myWebsiteDomain + "/user/message/action=markRead/messageID=" + messageID;
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => true)
      .catch(e => false)
  }

}
