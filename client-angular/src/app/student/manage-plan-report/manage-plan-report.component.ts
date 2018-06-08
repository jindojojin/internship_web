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
  jobID: any;
  studentID: string;
  reports: any[];
  myWebSiteDomain = myWebsiteDomain;
  newTitle: string; //tiêu đề gợi ý sẵn khi giáo viên tạo một yêu cầu báo cáo mới
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
        this.studentService.updatePlanReport(formData).then(r => {
          window.alert("Upload file mới thành công !");
          this.ngOnInit();
        })
          .catch(e => {
            window.alert("Upload file mới thất bại, vui lòng thử lại sau!");
          })
      };
    }
  }
  changePlanReport(planReportID){
    let titleInput = document.getElementById(planReportID+'title') as HTMLInputElement;
    let deadlineInput = document.getElementById(planReportID+'deadline') as HTMLInputElement;
    console.log(titleInput.value);
    console.log(deadlineInput.value);
    this.lecturerService.updatePlanReportForStudent({planReportID:planReportID,title:titleInput.value,deadline:deadlineInput.value})
    .then(r=>{
      if(r){
        window.alert("Cập nhập thành công!");
        this.ngOnInit();
      }else{
        window.alert("Cập nhập thất bại!");
        this.ngOnInit();
      }
    })
    .catch(e=> window.alert("Cập nhập thất bại!"));
  }
  deletePlanReport(planReportID){
    this.lecturerService.deletePlanReport(planReportID)
    .then(r=>{
      if(r){
        window.alert("Cập nhập thành công!");
        document.getElementById("closeDelete"+planReportID).click();
        this.ngOnInit();
      }else{
        window.alert("Cập nhập thất bại!");
        this.ngOnInit();
      }
    })
    .catch(e=> window.alert("Cập nhập thất bại!"));
  }
  reloadThisComponent(event) {
    if(event){
      window.alert("Tạo yêu cầu báo cáo thành công!");
      this.ngOnInit();
    }
    else{
      window.alert("Tạo yêu cầu báo cáo thất bại, vui lòng thử lại sau");
      this.ngOnInit();
    }
  }
  ngOnInit() {
    if (getCookie("userType") == "student") {
      this.studentService.getPlanReport().then(r => {
        if (r != false) {
          console.log(r);
          this.reports = r.planReports;
        }
        else this.reports =[];
      }
      ).catch(e =>{console.log(e);this.reports=null;} )
    } else {
      this.studentID = this.route.snapshot.paramMap.get("studentID");
      this.lecturerService.getPlanReportOfStudent(this.studentID)
        .then(r => {
          if (r != false) {
            console.log(r);
            this.reports = r.planReports;
            console.log(this.reports);
            // this.newTitle = "Báo cáo tuần " + (this.reports.length + 1);
            // console.log(this.newTitle);
          }
          else{
            this.reports=[];
          };
          this.newTitle = "Báo cáo tuần " + (this.reports.length + 1);
          this.jobID = (r.job)?(r.job.jobID):"";
            // console.log(this.newTitle);
        }
        ).catch(e => {console.log(e);this.reports=null;})

    }

  }

}
