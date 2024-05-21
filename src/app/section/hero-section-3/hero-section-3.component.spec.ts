import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSection3Component } from './hero-section-3.component';

describe('HeroSection3Component', () => {
  let component: HeroSection3Component;
  let fixture: ComponentFixture<HeroSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSection3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
