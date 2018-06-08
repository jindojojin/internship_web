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
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(url, { withCredentials: true, headers })
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
        const body = JSON.stringify(value);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { withCredentials: true, headers })
            .toPromise()
            .then(res => {
                return res.status;
            })
            .catch(err => console.log(err));
    }

    // gửi request xóa đợt thực tập
    deleteTerm(termID) {
        const url = myWebsiteDomain + "/admin/deleteTerm/termID=" + termID;
        const body = JSON.stringify(termID);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(url, { withCredentials: true, headers })
            // return this.http.delete(url, { headers })
            .toPromise()
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    // gửi request update đợt thực tập
    updateTerm(termID, newTermContent) {
        const url = myWebsiteDomain + "/admin/updateTerm/termID=" + termID;
        const body = JSON.stringify(newTermContent);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { withCredentials: true, headers })
            .toPromise()
            .then(res => {})
            .catch(err => console.log(err));
    }
}