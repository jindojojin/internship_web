import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessStudentComponent } from './assess-student.component';

describe('AssessStudentComponent', () => {
  let component: AssessStudentComponent;
  let fixture: ComponentFixture<AssessStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
