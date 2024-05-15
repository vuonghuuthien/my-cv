import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarSectionComponent } from './left-bar-section.component';

describe('LeftBarSectionComponent', () => {
  let component: LeftBarSectionComponent;
  let fixture: ComponentFixture<LeftBarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBarSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftBarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
