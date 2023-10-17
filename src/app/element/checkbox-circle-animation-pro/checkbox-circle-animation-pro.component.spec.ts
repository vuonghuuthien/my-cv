import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCircleAnimationProComponent } from './checkbox-circle-animation-pro.component';

describe('CheckboxCircleAnimationProComponent', () => {
  let component: CheckboxCircleAnimationProComponent;
  let fixture: ComponentFixture<CheckboxCircleAnimationProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxCircleAnimationProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxCircleAnimationProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
