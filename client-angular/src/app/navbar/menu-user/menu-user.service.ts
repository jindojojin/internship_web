import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { getCookie } from "../../objects/Cookiee";
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class MenuUserService {
    constructor(private http: Http) { }

    getMessages() {
        // console.log("da vao service lấy message")
        let userID = getCookie("userID")
        var url = myWebsiteDomain + '/user/messages/action=view/start=' + 1 + '/total=' + 10;
        // const body = JSON.stringify(value);
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                let unread:any[] =[];
                res.json().forEach(element => {
                    if(element.status =="unread") unread.push(element);
                });
                return unread;
            });
    }

    markMessageAsRead(messageID) {
        let url = myWebsiteDomain + "/user/message/action=markRead/messageID=" + messageID;
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(r => true)
            .catch(e => false)
    }
}