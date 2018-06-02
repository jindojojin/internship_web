import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { myWebsiteDomain } from '../objects/appConfig';

@Injectable()
export class LecturerService {

  constructor(private http : Http) { }

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

}
