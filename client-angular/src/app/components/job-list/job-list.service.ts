import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class JobListService {
    constructor(private http: Http) { }

    getList(start, total) {
        var url = myWebsiteDomain + "/list/jobs/start=" + start + "/total=" + total; //api server trả về
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }

    searchForJob(value) {
        let url = myWebsiteDomain + '/list/jobs/start=' + 1 + '/total=' + 10;
        return this.http.post(url, value, { withCredentials: true })
            .toPromise()
            .then(r => r.json())
            .catch(e => console.log(e));
    }
}