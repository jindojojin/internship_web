import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { myWebsiteDomain } from "../../objects/appConfig";

@Injectable()

export class JobAssignmentService {
    constructor(private http: Http) { }

    // gửi request lấy danh sách tài khoản
    getAccounts(type, start, total) {
        var url = myWebsiteDomain + "/list/users/type=" + type + "/start=" + start + "/total=" + total;
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }
    getStudentWithLecturer(start, total) {
        var url = myWebsiteDomain + "/admin/studentWithLecturer/start=" + start + "/total=" + total;
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(err => console.log(err));
    }

    setLecturerForStudent(studentID, lecturerID) {
        var url = myWebsiteDomain + "/admin/setLecturer/studentID=" + studentID + "/lecturerID=" + lecturerID;
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return true;
            })
            .catch(err => console.log(err));
    }
}