import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class PartnerListService {
    constructor(private http: Http) { }
    // total:number = 9;

    getList() {       
        // var url = "http://" + myWebsiteDomain + "/partners/total=" + this.total; //api server trả về
        // return this.http.get(url)
        //     .toPromise()
        //     .then(res => {
        //         // console.log(res.json());
        //         return res.json();
        //     })
        //     .catch(err => console.log(err));
    }
}