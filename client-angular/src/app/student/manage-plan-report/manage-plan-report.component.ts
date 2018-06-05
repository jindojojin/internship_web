import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { myWebsiteDomain } from '../../objects/appConfig';

@Component({
  selector: 'app-manage-plan-report',
  templateUrl: './manage-plan-report.component.html',
  styleUrls: ['./manage-plan-report.component.css']
})
export class ManagePlanReportComponent implements OnInit {
  reports: any[];
  myWebSiteDomain = myWebsiteDomain;
  constructor(private studentService: StudentService) { }
  sendNewReportFile(event,planReportID) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      // console.log(file);
      reader.onload = (e: any) => {
        let formData = new FormData();
        formData.append("fileUpload",file);
        formData.append("planReportID",planReportID);
        this.studentService.updatePlanReport(formData).then(r=> console.log("thanh cong"))
      };
    }
  }
  ngOnInit() {
    this.studentService.getPlanReport().then(r => {
      if (r != false) {
        console.log(r);
        this.reports = r;
      }
      else window.alert("Đã có lỗi xảy ra, vui lòng thử lại sau");
    }
    ).catch(e => window.alert("Đã có lỗi xảy ra, vui lòng thử lại sau"))
  }

}
