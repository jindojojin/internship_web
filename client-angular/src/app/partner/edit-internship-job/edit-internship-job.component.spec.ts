import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInternshipJobComponent } from './edit-internship-job.component';

describe('EditInternshipJobComponent', () => {
  let component: EditInternshipJobComponent;
  let fixture: ComponentFixture<EditInternshipJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInternshipJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInternshipJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
