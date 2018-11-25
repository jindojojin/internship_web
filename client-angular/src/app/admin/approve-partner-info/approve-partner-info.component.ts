import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { myWebsiteDomain } from '../../objects/appConfig';

@Component({
  selector: 'app-approve-partner-info',
  templateUrl: './approve-partner-info.component.html',
  styleUrls: ['./approve-partner-info.component.css']
})
export class ApprovePartnerInfoComponent implements OnInit {
  listPartnerInfo: any[];
  constructor(private http: Http) { }
  getlistPartnerInfo() {
    let url = myWebsiteDomain + '/admin/partnerInfos';
    this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        this.listPartnerInfo = r.json();
      })
      .catch(e => {
        console.log(e);
        window.alert("Đã có lỗi xảy ra ở phía server")
      });
  }

  updatePartnerInfo(partnerInforID, action, requesterID) {
    let partnerInfo = { status: action, partner_infoID: partnerInforID, requesterID: requesterID };
    let url = myWebsiteDomain + '/admin/partnerInfo';
    this.http.put(url, partnerInfo, { withCredentials: true })
      .toPromise()
      .then(r => this.ngOnInit())
      .catch(e => {
        console.log(e);
        window.alert("Đã xảy ra lỗi phía server")
      })
  }
  ngOnInit() {
    this.getlistPartnerInfo();
  }

}
