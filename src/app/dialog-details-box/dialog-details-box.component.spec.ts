import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailsBoxComponent } from './dialog-details-box.component';

describe('DialogDetailsBoxComponent', () => {
  let component: DialogDetailsBoxComponent;
  let fixture: ComponentFixture<DialogDetailsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetailsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDetailsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
