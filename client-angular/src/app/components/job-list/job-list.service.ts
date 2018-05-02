import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class JobListService {
    constructor(private http: Http) { }
    start:number = 1;
    total:number = 10;

    getList() {       
        var url = "http://localhost:3000/list/jobs/start=" + this.start + "/total=" + this.total; //api server trả về
        return this.http.get(url)
            .toPromise()
            .then(res => {
                // console.log(res.json());
                return res.json();
            })
            .catch(err => console.log(err));
    }
}