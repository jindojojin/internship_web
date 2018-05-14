import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class ManageUserService {
    constructor(private http: Http) { }

    // gửi request lấy danh sách tài khoản
    getAccounts() {
        var url = "http://" + myWebsiteDomain + "/admin/getAccounts";
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }

    // gửi request xóa tài khoản
    deleteAccount(userID) {
        const url = "http://" + myWebsiteDomain + "/admin/deleteAccount/userID=" + userID;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(userID);
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }
}