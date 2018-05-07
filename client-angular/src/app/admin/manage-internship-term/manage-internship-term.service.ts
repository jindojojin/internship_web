import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig"

@Injectable()

export class ManageInternshipTermService {
    constructor(private http: Http) { }

    getTerms() {
        var url = "http://" + myWebsiteDomain + "/admin/getTerms"; //api server trả về
        return this.http.get(url)
            .toPromise()
            .then(res => {
                // console.log(res.json());
                return res.json();
            })
            .catch(err => console.log(err));
    }

    sendNewTerm(value) {
        const url = "http://" + myWebsiteDomain + "/admin/createTerm";
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const body = JSON.stringify(value);
        // console.log(body);
        return this.http.post(url, body, { headers })
            .toPromise()
            .then(res => {
                // console.log("dang chay");
                return res.json()
            }
            );
    }
}