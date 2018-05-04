import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInternshipTermComponent } from './manage-internship-term.component';

describe('ManageInternshipTermComponent', () => {
  let component: ManageInternshipTermComponent;
  let fixture: ComponentFixture<ManageInternshipTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInternshipTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInternshipTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
