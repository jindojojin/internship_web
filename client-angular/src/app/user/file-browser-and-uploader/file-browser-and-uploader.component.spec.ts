import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBrowserAndUploaderComponent } from './file-browser-and-uploader.component';

describe('FileBrowserAndUploaderComponent', () => {
  let component: FileBrowserAndUploaderComponent;
  let fixture: ComponentFixture<FileBrowserAndUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileBrowserAndUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBrowserAndUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
