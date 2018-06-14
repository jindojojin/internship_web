import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class AddUserService {
    constructor(private http: Http) { }

    // gửi request tạo tài khoản mới
    addUser(value) {
        const url = myWebsiteDomain + "/admin/CRUD/account";
        const body = JSON.stringify(value);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { withCredentials: true, headers })
            .toPromise()
            .then(res => {
                return res.status;
            })
            .catch(err => console.log(err))
    }
}