import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAnimationComponent } from './slider-animation.component';

describe('SliderAnimationComponent', () => {
  let component: SliderAnimationComponent;
  let fixture: ComponentFixture<SliderAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
