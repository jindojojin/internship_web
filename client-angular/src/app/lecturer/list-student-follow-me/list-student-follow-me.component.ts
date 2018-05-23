import { Component, OnInit } from '@angular/core';
import { ListStudentFollowMeService } from './list-student-follow-me.service';


@Component({
  selector: 'app-list-student-follow-me',
  templateUrl: './list-student-follow-me.component.html',
  styleUrls: ['./list-student-follow-me.component.css'],
  providers:[ListStudentFollowMeService],
})
export class ListStudentFollowMeComponent implements OnInit {
  studentFollowMe: any[];
  constructor(private listStudentFollowMeService: ListStudentFollowMeService) { }

  ngOnInit() {
    this.listStudentFollowMeService.getStudentsFollowMe()
    .then(res =>{
      this.studentFollowMe = res;
    })
  }

  onAccept(userID) {
    this.listStudentFollowMeService.sendActionFollow("accept", userID)
    .then(res => {
      window.location.reload()
    })
  }

  onDeny(userID) {
    this.listStudentFollowMeService.sendActionFollow("deny", userID)
    .then(res => {
      window.location.reload()
    })
  }
}
