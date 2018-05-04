import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIntershipTermComponent } from './manage-intership-term.component';

describe('ManageIntershipTermComponent', () => {
  let component: ManageIntershipTermComponent;
  let fixture: ComponentFixture<ManageIntershipTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageIntershipTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIntershipTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
