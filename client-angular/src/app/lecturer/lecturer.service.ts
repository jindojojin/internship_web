import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { getCookie } from "../objects/Cookiee";
import { myWebsiteDomain } from "../objects/appConfig";

@Injectable()

export class LecturerService {
    constructor(private http: Http) { }
    getStudentsFollowMe() {
        let userID = getCookie("userID");
        var url = "http://" + myWebsiteDomain + "/lecturer/getStudentsFollowMe"
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res =>res.json())
            .catch(err => console.log(err));
    }
}