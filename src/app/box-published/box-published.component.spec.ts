import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPublishedComponent } from './box-published.component';

describe('BoxPublishedComponent', () => {
  let component: BoxPublishedComponent;
  let fixture: ComponentFixture<BoxPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPublishedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
