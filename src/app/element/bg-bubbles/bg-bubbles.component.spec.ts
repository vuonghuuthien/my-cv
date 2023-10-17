import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgBubblesComponent } from './bg-bubbles.component';

describe('BgBubblesComponent', () => {
  let component: BgBubblesComponent;
  let fixture: ComponentFixture<BgBubblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgBubblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
