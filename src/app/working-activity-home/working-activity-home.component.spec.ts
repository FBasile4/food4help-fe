import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingActivityHomeComponent } from './working-activity-home.component';

describe('WorkingActivityHomeComponent', () => {
  let component: WorkingActivityHomeComponent;
  let fixture: ComponentFixture<WorkingActivityHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingActivityHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingActivityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
