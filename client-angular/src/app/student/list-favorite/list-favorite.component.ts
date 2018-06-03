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
  constructor(private studentService: StudentService) { }

  unfollowLecturer(lecturerID,lecturerName){
    this.studentService.crudFollow("unfollow", "lecturer", lecturerID)
    .then(
      r => {
        let message = "Đã bỏ theo dõi "+lecturerName;
        window.alert(message);
        this.ngOnInit();
      })
    .catch(e => {
      window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
    })
  }
  unfollowPartner(partnerID,partnerName) {
    this.studentService.crudFollow("unfollow", "partner", partnerID)
    .then(
      r => {
        let message = "Đã bỏ theo dõi "+partnerName;
        window.alert(message);
        this.ngOnInit();
      })
    .catch(e => {
      window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
    })
  }
  
  unfollowJob(jobID,partner_name) {
    this.studentService.crudFollow("unfollow", "job",jobID).then(r => {
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
    this.studentService.getJobsFollowed().then(r=>{
      // if(!r){
        console.log(r);
        
        this.listJobFollowed = r;
      // }
    });
    this.studentService.getLecturerFollowed().then(r=>{
      // if(r != false){
        console.log(r);
        this.lecturerFollowed = r;
      // }
    })

    this.studentService.getPartnersFollowed().then(r=> {
      // if(!r) {
        console.log(r);
        this.listPartnerFollowed=r;
      // }
    })
  }

}
