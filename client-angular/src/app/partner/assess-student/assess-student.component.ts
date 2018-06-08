import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-assess-student',
  templateUrl: './assess-student.component.html',
  styleUrls: ['./assess-student.component.css']
})
export class AssessStudentComponent implements OnInit {
  myStudents: any[] = [];
  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.partnerService.getStudentWorking().then(r=>{
      if(r!=false){
        console.log(r);
        this.myStudents = r;
      }
    })
  }

}
