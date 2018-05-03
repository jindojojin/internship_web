import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagageInternshipTermComponent } from './magage-internship-term.component';

describe('MagageInternshipTermComponent', () => {
  let component: MagageInternshipTermComponent;
  let fixture: ComponentFixture<MagageInternshipTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagageInternshipTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagageInternshipTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
