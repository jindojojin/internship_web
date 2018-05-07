import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class SignInService {
    constructor(private http: Http) { }

    sendPost(value) {
        const url = "http://" + myWebsiteDomain + "/signin";
        const headers = new Headers({'Content-Type': 'application/json'})
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers },)
            .toPromise()
            .then(res => res.json());
    }
}