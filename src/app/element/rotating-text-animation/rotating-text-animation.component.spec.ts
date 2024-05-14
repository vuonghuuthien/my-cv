import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingTextAnimationComponent } from './rotating-text-animation.component';

describe('RotatingTextAnimationComponent', () => {
  let component: RotatingTextAnimationComponent;
  let fixture: ComponentFixture<RotatingTextAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotatingTextAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotatingTextAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
