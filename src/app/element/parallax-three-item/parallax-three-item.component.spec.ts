import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxThreeItemComponent } from './parallax-three-item.component';

describe('ParallaxThreeItemComponent', () => {
  let component: ParallaxThreeItemComponent;
  let fixture: ComponentFixture<ParallaxThreeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxThreeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxThreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
