import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { myWebsiteDomain } from '../../objects/appConfig';
import { Http } from '@angular/http';
import { getCookie } from '../../objects/Cookiee';

@Component({
  selector: 'app-edit-internship-job',
  templateUrl: './edit-internship-job.component.html',
  styleUrls: ['./edit-internship-job.component.css']
})
export class EditInternshipJobComponent implements OnInit {
  terms:any[];
  
  job:any= Object;
  canEdit:boolean=true;
  onSubmit(form) {
    form.value.jobID=this.job.jobID;
    console.log(form.value);
    this.partnerService.editJob(form.value)
      .then(r => {
        if (r) {
          window.alert("Đã lưu lại các chỉnh sửa của bạn!");
          this.router.navigate(['']);
        } else {
          window.alert("Chỉnh sửa bài đăng thất bại, vui lòng thử lại sau!");
          this.ngOnInit();
        }
      }).catch(e => {
        window.alert("Chỉnh sửa bài đăng thất bại, vui lòng thử lại sau!");
        this.ngOnInit();
      })
  }
  constructor(private partnerService: PartnerService, private router : Router,private route:ActivatedRoute,private http: Http) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("jobID");
    let url = myWebsiteDomain + "/job/id=" + id;
    this.partnerService.getTerm()
    .then(r => this.terms=r)
    .catch(e => this.terms =[])
    this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        if(r.json().partnerID == getCookie("userID")){
          this.job = r.json();
          console.log(this.job);
        }else{
          this.canEdit=false;
        }     
      })
      .catch(e => { console.log(e) })
  }

}
