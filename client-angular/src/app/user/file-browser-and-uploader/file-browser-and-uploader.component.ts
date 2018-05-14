import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-browser-and-uploader',
  templateUrl: './file-browser-and-uploader.component.html',
  styleUrls: ['./file-browser-and-uploader.component.css']
})
export class FileBrowserAndUploaderComponent implements OnInit {

  constructor() { }
  showIMG(){
    console.log("show img works!")
  }
  ngOnInit() {
  }

}
