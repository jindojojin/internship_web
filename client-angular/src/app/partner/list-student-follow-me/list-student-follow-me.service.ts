import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";
import { getCookie } from "../../objects/Cookiee";


@Injectable()

export class ListStudentFollowMeService {
    constructor(private http: Http) { }

    getStudentsFollowMe() {
        let userID = getCookie("userID");

        var url = myWebsiteDomain + "/partner/getStudentsFollowJob"
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    sendActionFollow(action: string, studentID: string, jobID: string) {
        var url = myWebsiteDomain + "/partner/action=" + action + "/jobID=" + jobID + "/studentID=" + studentID;
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
            })
            .catch(err => console.log(err));
    }
}