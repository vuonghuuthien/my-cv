import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTruckAnimationComponent } from './delivery-truck-animation.component';

describe('DeliveryTruckAnimationComponent', () => {
  let component: DeliveryTruckAnimationComponent;
  let fixture: ComponentFixture<DeliveryTruckAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryTruckAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryTruckAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
