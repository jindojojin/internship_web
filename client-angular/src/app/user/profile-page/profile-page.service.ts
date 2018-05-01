import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { getCookie } from "../../objects/Cookiee";

@Injectable()

export class ProfilePageService {
    constructor(private http: Http) { }
    getProfile() { 
        let userID = getCookie("userID");      
        var url = "http://localhost:3000/user/id="+ userID +"/profile"; //api server trả về
        return this.http.get(url)
            .toPromise()
            .then(res => {
                // console.log(res.json());
                return res.json();
            })
            .catch(err => console.log(err));
    }
}