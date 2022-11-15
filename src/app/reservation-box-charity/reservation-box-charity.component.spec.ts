import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationBoxCharityComponent } from './reservation-box-charity.component';

describe('ReservationBoxCharityComponent', () => {
  let component: ReservationBoxCharityComponent;
  let fixture: ComponentFixture<ReservationBoxCharityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationBoxCharityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationBoxCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
