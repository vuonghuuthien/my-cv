import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCircleAnimationComponent } from './checkbox-circle-animation.component';

describe('CheckboxCircleAnimationComponent', () => {
  let component: CheckboxCircleAnimationComponent;
  let fixture: ComponentFixture<CheckboxCircleAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxCircleAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxCircleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
