import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraStaffingComponent } from './extra-staffing.component';

describe('ExtraStaffingComponent', () => {
  let component: ExtraStaffingComponent;
  let fixture: ComponentFixture<ExtraStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraStaffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
