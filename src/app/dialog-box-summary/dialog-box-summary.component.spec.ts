import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxSummaryComponent } from './dialog-box-summary.component';

describe('DialogBoxSummaryComponent', () => {
  let component: DialogBoxSummaryComponent;
  let fixture: ComponentFixture<DialogBoxSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBoxSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBoxSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
