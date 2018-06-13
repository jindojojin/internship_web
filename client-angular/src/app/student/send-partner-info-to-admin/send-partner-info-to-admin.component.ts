import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { getCookie } from '../../objects/Cookiee';

@Component({
  selector: 'app-send-partner-info-to-admin',
  templateUrl: './send-partner-info-to-admin.component.html',
  styleUrls: ['./send-partner-info-to-admin.component.css']
})
export class SendPartnerInfoToAdminComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  submitPartnerInfo(form) {
    // console.log("đã vào đây");
    console.log(form.value);
    form.value.requesterID = getCookie("userID");
    this.studentService.addPartnerInfo(form.value)
      .then(r => {
        if (r)
          window.alert("Gửi thông tin cho quản trị viên thành công");
        else window.alert("Gửi thông tin cho quản trị viên thất bại")
      })
      .catch(e => window.alert("Gửi thông tin cho quản trị viên thất bại"))
  }
  ngOnInit() {
  }

}
