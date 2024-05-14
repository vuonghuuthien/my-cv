import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingTextAnimationComponent } from './rolling-text-animation.component';

describe('RollingTextAnimationComponent', () => {
  let component: RollingTextAnimationComponent;
  let fixture: ComponentFixture<RollingTextAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollingTextAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollingTextAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
