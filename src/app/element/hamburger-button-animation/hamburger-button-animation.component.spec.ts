import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerButtonAnimationComponent } from './hamburger-button-animation.component';

describe('HamburgerButtonAnimationComponent', () => {
  let component: HamburgerButtonAnimationComponent;
  let fixture: ComponentFixture<HamburgerButtonAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgerButtonAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgerButtonAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
