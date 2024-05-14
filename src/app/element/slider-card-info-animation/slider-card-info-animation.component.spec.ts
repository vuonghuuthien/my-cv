import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCardInfoAnimationComponent } from './slider-card-info-animation.component';

describe('SliderCardInfoAnimationComponent', () => {
  let component: SliderCardInfoAnimationComponent;
  let fixture: ComponentFixture<SliderCardInfoAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCardInfoAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCardInfoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
