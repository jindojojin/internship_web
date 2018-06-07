import { Component, OnInit } from '@angular/core';
import { ListStudentFollowMeService } from './list-student-follow-me.service';


@Component({
  selector: 'app-list-student-follow-me',
  templateUrl: './list-student-follow-me.component.html',
  styleUrls: ['./list-student-follow-me.component.css'],
  providers:[ListStudentFollowMeService],
})
export class ListStudentFollowMeComponent implements OnInit {
  studentFollowMe: any[]=[];
  constructor(private listStudentFollowMeService: ListStudentFollowMeService) { }

  ngOnInit() {
    this.listStudentFollowMeService.getStudentsFollowMe()
    .then(res =>{
      console.log(res);
      this.studentFollowMe = res;
    })
  }

  onAccept(userID,jobID) {
    this.listStudentFollowMeService.sendActionFollow("accept", userID,jobID)
    .then(res => {
      this.ngOnInit();
    })
  }

  onDeny(userID,jobID) {
    this.listStudentFollowMeService.sendActionFollow("deny", userID,jobID)
    .then(res => {
      this.ngOnInit();
    })
  }
}
