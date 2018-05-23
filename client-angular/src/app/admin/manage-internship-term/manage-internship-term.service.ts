import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { myWebsiteDomain } from "../../objects/appConfig"

@Injectable()

export class ManageInternshipTermService {
    constructor(private http: Http) { }

    // gửi request lấy danh sách các đợt thực tập
    getTerms() {
        var url = myWebsiteDomain + "/admin/getTerms"; //api server trả về
        return this.http.get(url, {withCredentials: true})
            .toPromise()
            .then(res => {
                // console.log(res.json());
                return res.json();
            })
            .catch(err => console.log(err));
    }

    // gửi request tạo mới đợt thực tập
    sendNewTerm(value) {
        const url = myWebsiteDomain + "/admin/createTerm";
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(value);
        return this.http.post(url, body, {withCredentials: true, headers })
            .toPromise()
            .then(res => {
                return res.status;
            })
            .catch(err => console.log(err));
    }

    // gửi request xóa đợt thực tập
    DeleteTerm(termID) {
        const url =myWebsiteDomain + "/admin/deleteTerm/termID=" + termID;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(termID);
        return this.http.get(url, {withCredentials: true})
        // return this.http.delete(url, { headers })
            .toPromise()
            .then(res => res.json())
            .catch(err => console.log(err));
    }
}