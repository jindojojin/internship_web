import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-favorite',
  templateUrl: './list-favorite.component.html',
  styleUrls: ['./list-favorite.component.css']
})
export class ListFavoriteComponent implements OnInit {
  lecturerFollowed: any;
  listPartnerFollowed: any;
  listJobFollowed: any;
  alreadyWork: boolean; // nếu sinh viên đang thực tập thì trả về true
  user;
  constructor(private studentService: StudentService) { }

  unfollowLecturer(lecturerID, lecturerName) {
    this.studentService.crudFollow("unfollow", "lecturer", lecturerID)
      .then(
        r => {
          let message = "Đã bỏ theo dõi " + lecturerName;
          window.alert(message);
          this.ngOnInit();
        })
      .catch(e => {
        window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
      })
  }
  unfollowPartner(partnerID, partnerName) {
    this.studentService.crudFollow("unfollow", "partner", partnerID)
      .then(
        r => {
          let message = "Đã bỏ theo dõi " + partnerName;
          window.alert(message);
          this.ngOnInit();
        })
      .catch(e => {
        window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
      })
  }

  unfollowJob(jobID, partner_name) {
    this.studentService.crudFollow("unfollow", "job", jobID).then(r => {
      if (r) {
        let messages = "Đã hủy đăng ký thực tập thành công, bạn vẫn có thể đăng kí lại công việc này của " + partner_name + " trước khi hết hạn đăng ký";
        document.getElementById("closeUnfollowJob").click();
        window.alert(messages);
        this.ngOnInit();
      }
      else
        window.alert("Hủy đăng kí thất bại, có lẽ đã có lỗi ở phía server, vui lòng thử lại sau hoặc liên hệ với quản trị viên để được giải quyết")
    }

    ).catch(e => window.alert("Hủy đăng kí thất bại, có lẽ đã có lỗi ở phía server, vui lòng thử lại sau hoặc liên hệ với quản trị viên để được giải quyết"));
  }

  workForThisJob(jobID) {
    this.studentService.choseJobToWork(jobID)
      .then(r => {
        if (r) {
          this.ngOnInit();
        } else { window.alert("Đã có lỗi xảy ra") }
      })
      .catch(e => window.alert("Đã có lỗi xảy ra"))
  }
  ngOnInit() {
    this.studentService.getJobsFollowed().then(r => {
      // if(!r){
      for (let job of r) {
        if (job.status == "working") { this.alreadyWork = true; break }
      }
      this.listJobFollowed = r;
      // }
    });
    this.studentService.getLecturerFollowed().then(r => {
      // if(r != false){
      this.lecturerFollowed = r;
      // }
    })

    this.studentService.getPartnersFollowed().then(r => {
      // if(!r) {
      this.listPartnerFollowed = r;
      // }
    })
  }

}
