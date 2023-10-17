import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinAnimationComponent } from './pin-animation.component';

describe('PinAnimationComponent', () => {
  let component: PinAnimationComponent;
  let fixture: ComponentFixture<PinAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
