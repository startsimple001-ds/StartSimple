import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPlan } from './weekly-plan';

describe('WeeklyPlan', () => {
  let component: WeeklyPlan;
  let fixture: ComponentFixture<WeeklyPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyPlan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
