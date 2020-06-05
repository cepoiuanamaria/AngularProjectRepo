import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MounthHeaderComponent } from './mounth-header.component';

describe('MounthHeaderComponent', () => {
  let component: MounthHeaderComponent;
  let fixture: ComponentFixture<MounthHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MounthHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MounthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
