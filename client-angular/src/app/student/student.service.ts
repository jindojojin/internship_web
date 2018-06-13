import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { myWebsiteDomain } from '../objects/appConfig';

@Injectable()
export class StudentService {

  updatePlanReport(newPlanReport) {
    const url = myWebsiteDomain + '/student/PlanReports';
    return this.http.put(url, newPlanReport, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 201) { return true; }
        return false;
      })
      .catch(e => { console.log(e); return false; });
  }
  constructor(private http: Http) { }

  crudFollow(action, target, tartgetID) {
    const url = myWebsiteDomain + '/student/action=' + action + '/target=' + target + '/targetID=' + tartgetID;
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 201) { return true; } else { return false; }
      }).catch(e => { console.log(e); return false; });
  }

  createNewPlanReportForStudent(newPlanReport) {
    const url = myWebsiteDomain + '/student/PlanReports';
    console.log(newPlanReport);
    return this.http.post(url, newPlanReport, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 201) { return true; }
        return false;
      })
      .catch(e => { console.log(e); return false; });
  }

  getLecturerFollowed() {
    const url = myWebsiteDomain + '/student/lecturerFollowed';
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 200) {
          return r.json();
        } else { return false; }
      })
      .catch(e => false);
  }

  getPartnersFollowed() {
    const url = myWebsiteDomain + '/student/listPartnersFollowed';
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 200) {
          return r.json();
        } else { return false; }
      })
      .catch(e => false);
  }

  getJobsFollowed() {
    const url = myWebsiteDomain + '/student/listJobsFollowed';
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 200) {
          return r.json();
        } else { return false; }
      })
      .catch(e => false);
  }

  getPlanReport() {
    const url = myWebsiteDomain + '/student/planReports';
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 200) {
          return r.json();
        } else { return false; }
      })
      .catch(e => false);
  }

  updatePlanReportFile(formData) {
    const url = myWebsiteDomain + '/student/planReports/file';
    return this.http.put(url, formData, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 201) {
          return true;
        } else { return false; }
      })
      .catch(e => false);
  }

  addPartnerInfo(partnerInfo){
    const url = myWebsiteDomain + '/student/addNewPartnerInfo';
    return this.http.post(url, partnerInfo, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 201) {
          return true;
        } else { return false; }
      })
      .catch(e => false);
  }

  choseJobToWork(jobID){
    const url = myWebsiteDomain+'/student/workForJob/jobID='+jobID;
    return this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status === 201) {
          return true;
        } else { return false; }
      })
      .catch(e => false);
  }
}
