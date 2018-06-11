import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { myWebsiteDomain } from '../objects/appConfig';

@Injectable()
export class LecturerService {

  
  getMyPointForPlanReport(planReportID){
    let url = myWebsiteDomain+ '/lecturer/letPointForStudent/planReportID='+planReportID;
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(r=>{
      console.log(r.json())
      if(r.status==200) return r.json();
      // return false;
    })
    .catch(e => false)
  }


  updatePointForPlanReport(planReportID,pointObject){
    let url = myWebsiteDomain+ '/lecturer/letPointForStudent/planReportID='+planReportID;
    return this.http.put(url,pointObject,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status==201) return true;
      return false;
    })
    .catch(e=> false)
  }
  constructor(private http : Http) { }
  deletePlanReport(planReportID) {
    let url = myWebsiteDomain+"/lecturer/planReports/planReportID="+planReportID;
    return this.http.delete(url,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status==200) return true;
      return false;
    })
    .catch(e=> false)
  }

  crudStudentFollowMe(action,studentID){
    let url = myWebsiteDomain+"lecturer/action="+action+"/studentID="+studentID;
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status==200) return true;
      return false;
    })
    .catch(e=> false)
  }

  getListStudent(){
    let url = myWebsiteDomain+"/lecturer/getListStudent";
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(r=>{
      console.log(r.json());
      if(r.status==200) return r.json();
      return false;
    })
    .catch(e=>{console.log(e); return false})
  }

  getPlanReportOfStudent(studentID){
    let url = myWebsiteDomain+"/lecturer/PlanReports/studentID="+studentID;
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(r=>{
      console.log(r.json());
      if(r.status==200) return r.json();
      return false;
    })
    .catch(e=>{console.log(e); return false})
  }

  createNewPlanReportForStudent(newPlanReport){
    let url = myWebsiteDomain +"/lecturer/PlanReports";
    console.log(newPlanReport);
    return this.http.post(url,newPlanReport,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status==201) return true;
      return false;
    })
    .catch(e=>{console.log(e); return false})
  }

  updatePlanReportForStudent(newPlanReport){
    let url = myWebsiteDomain +"/lecturer/PlanReports";
    return this.http.put(url,newPlanReport,{withCredentials:true})
    .toPromise()
    .then(r=>{
      if(r.status==201) return true;
      return false;
    })
    .catch(e=>{console.log(e); return false})
  }

  getMarkTable(){
    let url = myWebsiteDomain+'/lecturer/getMarkTable';
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(
      r=> {
        console.log(r);
        return r.json();
      }
    )
    .catch(e => false)
  }
}
