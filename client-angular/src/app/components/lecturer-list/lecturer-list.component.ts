import { Component, OnInit } from '@angular/core';
import { LecturerListService } from './lecturer-list.service'

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.css'],
  providers: [LecturerListService]
})
export class LecturerListComponent implements OnInit {
  lecturers: Object;
  constructor(private lecturerListService: LecturerListService) { }

  ngOnInit() {
    this.lecturerListService.getList()
      .then(res => {
        // console.log(res);
        this.lecturers = res;
      })
      .catch(err => console.log(err));
  }

}
