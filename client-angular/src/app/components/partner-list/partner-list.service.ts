import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class PartnerListService {
    constructor(private http: Http) { }
    start:number = 1;
    total:number = 9;

    getList() {    
        // var url = "https://api.myjson.com/bins/1hizwy";   
        var url = "http://" + myWebsiteDomain + "/list/users/type=partner/start=" + this.start + "/total=" + this.total; //api server trả về
        return this.http.get(url,{withCredentials:true})
            .toPromise()
            .then(res => {
                // console.log(res.json());
                return res.json();
            })
            .catch(err => console.log(err));
    }
}