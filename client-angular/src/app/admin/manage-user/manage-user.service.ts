import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class ManageUserService {
    constructor(private http: Http) { }

    // gửi request lấy danh sách tài khoản
    getAccounts(type, start, total) {
        var url = myWebsiteDomain + "/list/users/type=" + type + "/start=" + start + "/total=" + total;
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }

    // gửi requesst update tài khoản
    updateAccount(accountEdited) {
        const url = myWebsiteDomain + "/admin/CRUD/account";
        const body = JSON.stringify(accountEdited);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { withCredentials: true, headers })
            .toPromise()
            .then(res => { })
            .catch(err => console.log(err));
    }

    // gửi request xóa tài khoản
    deleteAccount(userID) {
        const url = myWebsiteDomain + "/admin/CRUD/account/userID=" + userID;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { withCredentials: true, headers })
            .toPromise()
            .then(res => {
                // return res.json();
            })
            .catch(err => console.log(err));
    }
}