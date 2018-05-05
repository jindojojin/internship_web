import { Component, OnInit } from '@angular/core';
import { LecturerService } from '../lecturer.service';


@Component({
  selector: 'app-list-student-follow-me',
  templateUrl: './list-student-follow-me.component.html',
  styleUrls: ['./list-student-follow-me.component.css'],
  providers:[LecturerService],
})
export class ListStudentFollowMeComponent implements OnInit {
  studentFollowMe: any[];
  constructor(private lecturerService: LecturerService) { }

  ngOnInit() {
    this.lecturerService.getStudentsFollowMe()
    .then(res =>{
      this.studentFollowMe = res;
    })
  }

}
