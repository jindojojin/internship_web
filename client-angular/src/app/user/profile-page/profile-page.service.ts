import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { getCookie } from "../../objects/Cookiee";
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class ProfilePageService {
    constructor(private http: Http) { }
    getProfile(id) { 
        let userID = id;
        var url = myWebsiteDomain+"/user/id="+ userID +"/profile"; //api server trả về
        return this.http.get(url,{ withCredentials: true })
            .toPromise()
            .then(res => {
                // console.log(res.json());
                return res.json();
            })
            .catch(err => console.log(err));
    }

    updateProfile(value){
        let url = myWebsiteDomain+"/user/update/profile";
        return this.http.post(url , value , { withCredentials: true})
        .toPromise()
        .then(res => {
            
        })
        .catch(err => console.log(err));
    }
}