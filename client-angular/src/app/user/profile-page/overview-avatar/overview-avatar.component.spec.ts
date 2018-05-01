import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAvatarComponent } from './overview-avatar.component';

describe('OverviewAvatarComponent', () => {
  let component: OverviewAvatarComponent;
  let fixture: ComponentFixture<OverviewAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
