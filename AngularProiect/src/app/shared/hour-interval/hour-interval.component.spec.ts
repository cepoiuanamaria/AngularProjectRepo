import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourIntervalComponent } from './hour-interval.component';

describe('HourIntervalComponent', () => {
  let component: HourIntervalComponent;
  let fixture: ComponentFixture<HourIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
