import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { myWebsiteDomain } from './objects/appConfig';

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

}
