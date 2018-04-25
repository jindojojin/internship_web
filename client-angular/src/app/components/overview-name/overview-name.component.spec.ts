import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewNameComponent } from './overview-name.component';

describe('OverviewNameComponent', () => {
  let component: OverviewNameComponent;
  let fixture: ComponentFixture<OverviewNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
