import { Component, OnInit } from '@angular/core';
import { LecturerService } from '../../../lecturer/lecturer.service';
import { getCookie } from '../../../objects/Cookiee';

@Component({
  selector: 'app-let-point-for-planreport-modal',
  templateUrl: './let-point-for-planreport-modal.component.html',
  styleUrls: ['./let-point-for-planreport-modal.component.css']
})
export class LetPointForPlanreportModalComponent implements OnInit {
  planReportTitle: string = null;
  planReportID: string = null;
  myPoint: number = null;
  myComment: string = null

  constructor(private lecturerService: LecturerService) { }

  showModal() {
    document.getElementById('btnOpenLetPointForStudentModal').click();
  }

  closeModal() {
    document.getElementById('CloseLetPointForStudentModal').click();
  }

  updatePoint(form) {
    form.value.lecturerID = getCookie('userID');
    form.value.planReportID = this.planReportID;

    this.lecturerService.updatePointForPlanReport(this.planReportID, form.value)
      .then(
        r => {
          this.closeModal();
        }
      ).catch(e => console.log(e))
  }

  getPoint(planreportID, planreportTitle) {
    this.planReportID = planreportID;
    this.planReportTitle = planreportTitle;
    this.lecturerService.getMyPointForPlanReport(this.planReportID)
      .then(
        r => {
          if (r != null) {
            this.myComment = r.comment;
            this.myPoint = r.mark;
          }
          this.showModal();
        }
      ).catch(e => { console.log(e); window.alert('đã có lỗi ở phía server!') })
  }

  ngOnInit() {
  }

}
