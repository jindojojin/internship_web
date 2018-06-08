import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class ManageUserService {
    constructor(private http: Http) { }

    // gửi request lấy danh sách tài khoản
    getAccounts(type) {
        var url = myWebsiteDomain + "/list/users/type=" + type + "/start=1/total=9";
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }

    // gửi request xóa tài khoản
    deleteAccount(userID) {
        const url = myWebsiteDomain + "/admin/CRUD/account/userID=" + userID;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(userID);
        return this.http.delete(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }
}