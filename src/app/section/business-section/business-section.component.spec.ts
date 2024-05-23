import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSectionComponent } from './business-section.component';

describe('BusinessSectionComponent', () => {
  let component: BusinessSectionComponent;
  let fixture: ComponentFixture<BusinessSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
