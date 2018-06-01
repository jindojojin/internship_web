import { Component, OnInit } from '@angular/core';
import { PartnerListService } from './partner-list.service';
import { myWebsiteDomain } from '../../objects/appConfig';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css'],
  providers: [PartnerListService]
})

export class PartnerListComponent implements OnInit {
  partners: Object;
  server = myWebsiteDomain;
  constructor(private partnerListService: PartnerListService, private studentService: StudentService) { }
  follow(partnerID,partnerName) {
    this.studentService.crudFollow("follow", "partner", partnerID)
      .then(
        r => {
          let message = "Đã thêm "+partnerName +" vào danh sách yêu thích, bạn sẽ nhận được các thông báo mới nhất từ "+partnerName;
          window.alert(message);
          this.ngOnInit();
        })
      .catch(e => {
        window.alert("đã xảy ra lỗi, vui lòng thử lại sau")
      })
  }
  unfollow(partnerID,partnerName) {
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
  ngOnInit() {
    this.partnerListService.getList()
      .then(res => {
        this.partners = res;
        console.log(this.partners);
      })
      .catch(err => console.log(err));
  }

}
