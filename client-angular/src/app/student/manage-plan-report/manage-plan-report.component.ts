import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../student.service';
import { myWebsiteDomain } from '../../objects/appConfig';
import { Http } from '@angular/http';
import { getCookie } from '../../objects/Cookiee';
import { LecturerService } from '../../lecturer/lecturer.service';
import { ActivatedRoute } from '@angular/router';
import { LetPointForPlanreportModalComponent } from './let-point-for-planreport-modal/let-point-for-planreport-modal.component';
import { ProfilePageService } from '../../user/profile-page/profile-page.service';

@Component({
  selector: 'app-manage-plan-report',
  templateUrl: './manage-plan-report.component.html',
  styleUrls: ['./manage-plan-report.component.css'],
  providers:[ProfilePageService]
})
export class ManagePlanReportComponent implements OnInit {
  jobID: any;
  studentID: string;
  reports: any[];
  myWebSiteDomain = myWebsiteDomain;
  newTitle: string; // tiêu đề gợi ý sẵn khi giáo viên tạo một yêu cầu báo cáo mới
  studentInfo: any;
  // tslint:disable-next-line:max-line-length
  constructor(private http: Http, private studentService: StudentService, private lecturerService: LecturerService, private route: ActivatedRoute,private profileService: ProfilePageService) { }
  sendNewComment(planReportID) {
    const text = document.getElementById(planReportID + 'comment') as HTMLTextAreaElement;
    // tslint:disable-next-line:triple-equals
    if (text.value == '') { return; }
    const body = { planReportID: planReportID, content: text.value };
    const url = this.myWebSiteDomain + '/user/commentOnPlanReport';
    this.http.post(url, body, { withCredentials: true })
      .toPromise()
      .then(r => {
        // tslint:disable-next-line:triple-equals
        if (r.status == 201) {
          this.ngOnInit();
        } else { console.log('gửi thất bại'); }
      })
      .catch(e => {
        console.log('thất bại trong việc comment :(');
        this.ngOnInit();
      });
  }
  sendNewReportFile(event, planReportID) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      // console.log(file);
      reader.onload = (e: any) => {
        const formData = new FormData();
        formData.append('fileUpload', file);
        formData.append('planReportID', planReportID);
        this.studentService.updatePlanReportFile(formData).then(r => {
          window.alert('Upload file mới thành công !');
          this.ngOnInit();
        })
          // tslint:disable-next-line:no-shadowed-variable
          .catch(e => {
            window.alert('Upload file mới thất bại, vui lòng thử lại sau!');
          });
      };
    }
  }
  changePlanReport(planReportID) {
    const titleInput = document.getElementById(planReportID + 'title') as HTMLInputElement;
    let deadlineInput;
    if (getCookie('userType') === 'lecturer') {
      deadlineInput = document.getElementById(planReportID + 'deadline') as HTMLInputElement;
    }
    const contentInput = document.getElementById(planReportID + 'content') as HTMLTextAreaElement;
    // console.log(titleInput.value);
    // console.log(deadlineInput.value);
    // tslint:disable-next-line:max-line-length
    if (getCookie('userType') === 'lecturer') {
      this.lecturerService.updatePlanReportForStudent({
        planReportID: planReportID,
        title: titleInput.value,
        content: contentInput.value,
        deadline: deadlineInput.value
      })
        .then(r => {
          if (r) {
            window.alert('Cập nhập thành công!');
            this.ngOnInit();
          } else {
            window.alert('Cập nhập thất bại!');
            this.ngOnInit();
          }
        })
        .catch(e => window.alert('Cập nhập thất bại!'));
    } else {
      this.studentService.updatePlanReport({
        planReportID: planReportID,
        title: titleInput.value,
        content: contentInput.value,
      })
        .then(r => {
          if (r) {
            window.alert('Cập nhập thành công!');
            this.ngOnInit();
          } else {
            window.alert('Cập nhập thất bại!');
            this.ngOnInit();
          }
        })
        .catch(e => window.alert('Cập nhập thất bại!'));
    }

  }
  deletePlanReport(planReportID) {
    this.lecturerService.deletePlanReport(planReportID)
      .then(r => {
        if (r) {
          window.alert('Cập nhập thành công!');
          document.getElementById('closeDelete' + planReportID).click();
          this.ngOnInit();
        } else {
          window.alert('Cập nhập thất bại!');
          this.ngOnInit();
        }
      })
      .catch(e => window.alert('Cập nhập thất bại!'));
  }
  deleteComment(commentID) {
    const url = myWebsiteDomain + '/' + getCookie('userType') + '/comments/commentID=' + commentID;
    this.http.delete(url, { withCredentials: true })
      .toPromise()
      .then(r => this.ngOnInit())
      .catch(e => window.alert('đã có lỗi xảy ra'));
  }
  reloadThisComponent(event) {
    if (event) {
      window.alert('Tạo yêu cầu báo cáo thành công!');
      this.ngOnInit();
    } else {
      window.alert('Tạo yêu cầu báo cáo thất bại, vui lòng thử lại sau');
      this.ngOnInit();
    }
  }
  isMyComment(commenterID) {
    // tslint:disable-next-line:triple-equals
    return (commenterID == getCookie('userID')) ? true : false;
  }
  ngOnInit() {
    // tslint:disable-next-line:triple-equals
    if (getCookie('userType') == 'student') {
      this.studentService.getPlanReport().then(r => {
        // tslint:disable-next-line:triple-equals
        if (r != false) {
          console.log(r);
          this.reports = r.planReports;
        } else { this.reports = []; }
      }
      ).catch(e => { console.log(e); this.reports = null; });
    } else {
      this.studentID = this.route.snapshot.paramMap.get('studentID');
      this.profileService.getProfile(this.studentID).then(
        r=> this.studentInfo=r
      ).catch( e => this.studentInfo= null);
      this.lecturerService.getPlanReportOfStudent(this.studentID)
        .then(r => {
          // tslint:disable-next-line:triple-equals
          if (r != false) {
            console.log(r);
            this.reports = r.planReports;
            console.log(this.reports);
            // this.newTitle = "Báo cáo tuần " + (this.reports.length + 1);
            // console.log(this.newTitle);
          } else {
            this.reports = [];
          }
          this.newTitle = 'Báo cáo tuần ' + (this.reports.length + 1);
          this.jobID = (r.job) ? (r.job.jobID) : '';
          // console.log(this.newTitle);
        }
        ).catch(e => { console.log(e); this.reports = null; });

    }

  }
  @ViewChild(LetPointForPlanreportModalComponent)
  letPoint: LetPointForPlanreportModalComponent;
  letPointForPlanReport(planReportID, title){
    this.letPoint.getPoint(planReportID,title);
  }

}
