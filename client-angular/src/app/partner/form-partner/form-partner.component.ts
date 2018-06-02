import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { myWebsiteDomain } from '../../objects/appConfig';
import { getCookie } from '../../objects/Cookiee';
import { StudentService } from '../../student/student.service';
import { calculateDiffDays } from '../../objects/regex';

@Component({
  selector: 'app-form-partner',
  templateUrl: './form-partner.component.html',
  styleUrls: ['./form-partner.component.css']
})
export class FormPartnerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: Http, private studentService: StudentService) { }
  job: any;
  isStudent: boolean;
  validToFollow:boolean;

  followJob() {
    let partner_name = this.job.partner_name;
    this.studentService.crudFollow("follow", "job", this.job.jobID).then(r => {
      if (r) {
        let messages = "Đã đăng ký thực tập thành công, bạn sẽ nhận được thông báo chấp nhận/ từ chối từ " + partner_name + " sớm thôi";
        window.alert(messages);
        this.ngOnInit();
      }
      else {
        window.alert("Đăng kí thất bại, có lẽ đã có lỗi ở phía server, vui lòng thử lại sau");
      }
    }
    ).catch(e => window.alert("Đăng kí thất bại, có lẽ đã có lỗi ở phía server, vui lòng thử lại sau"));
  }
  unfollowJob() {
    let partner_name = this.job.partner_name;

    this.studentService.crudFollow("unfollow", "job", this.job.jobID).then(r => {
      if (r) {
        let messages = "Đã hủy đăng ký thực tập thành công, bạn vẫn có thể đăng kí lại công việc này của " + partner_name + " trước khi hết hạn đăng ký";
        window.alert(messages);
        this.ngOnInit();
      }
      else
        window.alert("Hủy đăng kí thất bại, có lẽ đã có lỗi ở phía server, vui lòng thử lại sau hoặc liên hệ với quản trị viên để được giải quyết")
    }

    ).catch(e => window.alert("Hủy đăng kí thất bại, có lẽ đã có lỗi ở phía server, vui lòng thử lại sau hoặc liên hệ với quản trị viên để được giải quyết"));
  }

  ngOnInit() {
    this.isStudent = (getCookie("userType") == "student") ? true : false;
    console.log(this.isStudent);
    let id = this.route.snapshot.paramMap.get("id");
    let url = myWebsiteDomain + "/job/id=" + id;
    this.http.get(url, { withCredentials: true })
      .toPromise()
      .then(r => {
        this.job = r.json();
        console.log(this.job);
    this.validToFollow= (calculateDiffDays(this.job) >=0)?true:false;
        
      })
      .catch(e => { console.log(e) })
  }

}
