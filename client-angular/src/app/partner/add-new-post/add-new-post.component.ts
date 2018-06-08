import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {
  onSubmit(form) {
    console.log(form.value);
    this.partnerService.createJob(form.value)
      .then(r => {
        if (r) {
          window.alert("Tạo bài đăng thành công!");
          this.router.navigate(['']);
        } else {
          window.alert("Tạo bài đăng thất bại, vui lòng thử lại sau!");
          this.ngOnInit();
        }
      }).catch(e => {
        window.alert("Tạo bài đăng thất bại, vui lòng thử lại sau!");
        this.ngOnInit();
      })
  }
  constructor(private partnerService: PartnerService, private router : Router) { }

  ngOnInit() {
  }

}
