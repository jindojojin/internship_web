import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class LecturerListService {
    constructor(private http: Http) { }

    getList(start, total) {
        var url = myWebsiteDomain + "/list/users/type=lecturer/start=" + start + "/total=" + total; //api server trả về
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }
}