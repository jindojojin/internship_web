import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../../objects/appConfig";

@Injectable()

export class PostService {
    constructor(private http: Http) { }

    follow(action, target, targetID) {
        var url = "http://" + myWebsiteDomain + "/student/action=" + action +  "/target=" + target + "/targetID=" + targetID;
        console.log(url);
        return this.http.get(url, {withCredentials: true})
            .toPromise()
            .then(res => {
                return res.status;
            })
            .catch(err => {return false});
    }
}