import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceSectionComponent } from './introduce-section.component';

describe('IntroduceSectionComponent', () => {
  let component: IntroduceSectionComponent;
  let fixture: ComponentFixture<IntroduceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
