import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessStudentModalComponent } from './assess-student-modal.component';

describe('AssessStudentModalComponent', () => {
  let component: AssessStudentModalComponent;
  let fixture: ComponentFixture<AssessStudentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessStudentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
