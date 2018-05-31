import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class JobListService {
    constructor(private http: Http) { }
    start:number = 1;
    total:number = 10;

    getList() {       
        var url = myWebsiteDomain + "/list/jobs/start=" + this.start + "/total=" + this.total; //api server trả về
        return this.http.get(url)
            .toPromise()
            .then(res => {
                // console.log(res);
                return res.json();
            })
            .catch(err => console.log(err));
    }

    searchForJob(value) {
        let url = myWebsiteDomain + '/list/jobs/start=' + 1 + '/total=' + 10;
        return this.http.post(url, value, { withCredentials: true })
          .toPromise()
          .then(r => r.json()
          ).catch(e => console.log(e) 
          )
      }
}