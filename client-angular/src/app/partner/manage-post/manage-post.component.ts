import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {
  listJob: any[] = [];
  constructor(private partnerService: PartnerService) { }
  deleteJob(jobID) {
    this.partnerService.deleteJob(jobID).then(r => {
      if (r) {
        document.getElementById("closeDeleteJob" + jobID).click();
        // window.alert("Đã xóa bài đăng thành công!");
        this.ngOnInit();
      } else {
        document.getElementById("closeDeleteJob" + jobID).click();
        window.alert("Xóa bài đăng thất bại!");
        this.ngOnInit();
      }
    }).catch(e => {
      document.getElementById("closeDeleteJob" + jobID).click();
      window.alert("Xóa bài đăng thất bại!");
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.partnerService.getJobByPartner().then(
      r => {
        if (r != false) {
          this.listJob = r;
        }
      }
    ).catch();
  }

}
