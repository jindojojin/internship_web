import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PostService {
    constructor(private http: Http) { }

    getPost() {
        const url = "https://api.myjson.com/bins/19cqjj"; //api server trả về
        return this.http.get(url)
            .toPromise()
            .then(res => {
                // console.log(res.json());
                return res.json();
            })
            .catch(err => console.log(err));
    }
}