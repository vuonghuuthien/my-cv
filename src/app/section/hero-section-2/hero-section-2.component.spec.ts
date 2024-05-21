import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSection2Component } from './hero-section-2.component';

describe('HeroSection2Component', () => {
  let component: HeroSection2Component;
  let fixture: ComponentFixture<HeroSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
