import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { getCookie } from '../../objects/Cookiee';
import { myWebsiteDomain } from '../../objects/appConfig';

@Injectable()

export class ProfilePageService {
    constructor(private http: Http) { }
    getProfile(id) {
        // tslint:disable-next-line:prefer-const
        let userID = id;
        // tslint:disable-next-line:prefer-const
        let url = myWebsiteDomain + '/profile/id=' + userID; // api server trả về
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }

    updateProfile(value) {
        // tslint:disable-next-line:prefer-const
        let url = myWebsiteDomain + '/user/update/profile';
        return this.http.put(url, value, { withCredentials: true })
            .toPromise()
            .then(res => {

            })
            .catch(err => console.log(err));
    }

    adminUpdateProfile(userID, value) {
        // tslint:disable-next-line:prefer-const
        let url = myWebsiteDomain + '/admin/update/profile/userID=' + userID;
        return this.http.put(url, value, { withCredentials: true })
            .toPromise()
            .then(res => {
                // tslint:disable-next-line:triple-equals
                if (res.status == 201) {
                    return true;
                } else { return false; }
            })
            .catch(err => console.log(err));
    }
}
