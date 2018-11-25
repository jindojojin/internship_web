import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { myWebsiteDomain } from '../objects/appConfig';

@Injectable()
export class PartnerService {

  getTerm() {
    let url = myWebsiteDomain + '/partner/getTerms';
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status == 200) {
          return r.json();
        }
        return false
      }).catch(e => {
        console.log(e);
        return false;
      })
  }

  editJob(data) {
    let url = myWebsiteDomain + "/partner/editJob";
    return this.http.put(url, data, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status == 201) {
          return true;
        }
        return false
      }).catch(e => {
        console.log(e);
        return false;
      })
  }
  deleteJob(jobID) {
    let url = myWebsiteDomain + '/partner/Job/jobID=' + jobID;
    return this.http.delete(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status == 200) {
          return true;
        }
        return false
      }).catch(e => {
        console.log(e);
        return false;
      })
  }
  constructor(private http: Http) { }

  getJobByPartner() {
    let url = myWebsiteDomain + "/partner/listJobByPartner";
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status == 200) {
          return r.json();
        }
        return false
      }).catch(e => {
        console.log(e);
        return false;
      })
  }

  getStudentWorking() {
    let url = myWebsiteDomain + "/partner/listStudentWorkingForPartner";
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status == 200) {
          return r.json();
        }
        return false
      }).catch(e => {
        console.log(e);
        return false;
      })

  }

  createJob(data) {
    let url = myWebsiteDomain + "/partner/createNewJob";
    return this.http.post(url, data, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status == 201) {
          return true;
        }
        return false
      }).catch(e => {
        console.log(e);
        return false;
      })
  }

}
