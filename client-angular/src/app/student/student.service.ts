import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { myWebsiteDomain } from '../objects/appConfig';

@Injectable()
export class StudentService {

  constructor(private http : Http) { }

  crudFollow(action, target,tartgetID){
    let url= myWebsiteDomain+"/student/action="+action+"/target="+target+"/targetID="+tartgetID;
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then( r => {
      if(r.status == 201) return true;
      else return false;
    } ).catch(e => {console.log(e); return false;})
  }

  getLecturerFollowed(){
    let url = myWebsiteDomain+"/student/lecturerFollowed";
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status == 200){
        return r.json()
      }
      else return false;
    })
    .catch(e => false)
  }

  getPartnersFollowed(){
    let url = myWebsiteDomain+"/student/listPartnersFollowed";
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status == 200){
        return r.json()
      }
      else return false;
    })
    .catch(e => false)
  }

  getJobsFollowed(){
    let url = myWebsiteDomain+"/student/listJobsFollowed";
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status == 200){
        return r.json()
      }
      else return false;
    })
    .catch(e => false)
  }

  getPlanReport(){
    let url = myWebsiteDomain+"/student/planReports";
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status == 200){
        return r.json()
      }
      else return false;
    })
    .catch(e => false)
  }

  updatePlanReport(formData){
    let url = myWebsiteDomain+"/student/planReports/file";
    return this.http.put(url,formData,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status == 201){
        return true;
      }
      else return false;
    })
    .catch(e => false)
  }

}
