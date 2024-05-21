import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgShapeDepthComponent } from './bg-shape-depth.component';

describe('BgShapeDepthComponent', () => {
  let component: BgShapeDepthComponent;
  let fixture: ComponentFixture<BgShapeDepthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgShapeDepthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgShapeDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
