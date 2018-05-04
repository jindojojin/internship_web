import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student-follow-me',
  templateUrl: './list-student-follow-me.component.html',
  styleUrls: ['./list-student-follow-me.component.css']
})
export class ListStudentFollowMeComponent implements OnInit {
  studentFollowMe: any[] = [
    {
      name: "trần quang linh",
      studentCode: "16021031",
      vnumail: "16021031@vnu.edu.vn"
    },
    {
      name: "trần quang lanh",
      studentCode: "16021021",
      vnumail: "16021021@vnu.edu.vn"
    },
    {
      name: "trần quang lĩnh",
      studentCode: "16021033",
      vnumail: "16021033@vnu.edu.vn"
    },
    {
      name: "trần quang linh",
      studentCode: "16021031",
      vnumail: "16021031"
    },]
  constructor() { }

  ngOnInit() {
  }

}
