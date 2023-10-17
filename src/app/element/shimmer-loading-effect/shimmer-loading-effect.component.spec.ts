import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerLoadingEffectComponent } from './shimmer-loading-effect.component';

describe('ShimmerLoadingEffectComponent', () => {
  let component: ShimmerLoadingEffectComponent;
  let fixture: ComponentFixture<ShimmerLoadingEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShimmerLoadingEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShimmerLoadingEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
