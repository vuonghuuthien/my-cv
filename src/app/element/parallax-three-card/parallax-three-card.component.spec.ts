import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxThreeCardComponent } from './parallax-three-card.component';

describe('ParallaxThreeCardComponent', () => {
  let component: ParallaxThreeCardComponent;
  let fixture: ComponentFixture<ParallaxThreeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxThreeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxThreeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
