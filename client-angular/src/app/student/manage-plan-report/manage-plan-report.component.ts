import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { myWebsiteDomain } from '../../objects/appConfig';
import { Http } from '@angular/http';
import { getCookie } from '../../objects/Cookiee';
import { LecturerService } from '../../lecturer/lecturer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-plan-report',
  templateUrl: './manage-plan-report.component.html',
  styleUrls: ['./manage-plan-report.component.css']
})
export class ManagePlanReportComponent implements OnInit {
  reports: any[];
  myWebSiteDomain = myWebsiteDomain;
  constructor(private http: Http, private studentService: StudentService, private lecturerService: LecturerService, private route: ActivatedRoute) { }
  sendNewComment(planReportID) {
    let text = document.getElementById(planReportID + 'comment') as HTMLTextAreaElement;
    let body = { planReportID: planReportID, content: text.value };
    let url = this.myWebSiteDomain + "/user/commentOnPlanReport";
    this.http.post(url, body, { withCredentials: true })
      .toPromise()
      .then(r => {
        if (r.status == 201)
          this.ngOnInit();
        else console.log("gửi thất bại")
      })
      .catch(e => {
        console.log("thất bại trong việc comment :(")
        this.ngOnInit();
      })
  }
  sendNewReportFile(event, planReportID) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      // console.log(file);
      reader.onload = (e: any) => {
        let formData = new FormData();
        formData.append("fileUpload", file);
        formData.append("planReportID", planReportID);
        this.studentService.updatePlanReport(formData).then(r => console.log("thanh cong"))
      };
    }
  }
  ngOnInit() {
    if (getCookie("userType") == "student") {
      this.studentService.getPlanReport().then(r => {
        if (r != false) {
          console.log(r);
          this.reports = r;
        }
        else window.alert("Đã có lỗi xảy ra, vui lòng thử lại sau");
      }
      ).catch(e => window.alert("Đã có lỗi xảy ra, vui lòng thử lại sau"))
    } else {
      let studentID = this.route.snapshot.paramMap.get("studentID");
      this.lecturerService.getPlanReportOfStudent(studentID)
        .then(r => {
          if (r != false) {
            console.log(r);
            this.reports = r;
          }
          else window.alert("Đã có lỗi xảy ra, vui lòng thử lại sau");
        }
        ).catch(e => window.alert("Đã có lỗi xảy ra, vui lòng thử lại sau"))

    }
  }

}
