import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { myWebsiteDomain } from '../../objects/appConfig';

@Injectable()
export class JobListByPartnerService {
  constructor(private http: Http) { }

  getListJobByPartner(partnerID){
    let url = myWebsiteDomain+'/listJobByPartner/partnerID='+partnerID;
    return this.http.get(url,{withCredentials:true})
    .toPromise()
    .then(r=>r.json())
    .catch(e => false)
  }

}
