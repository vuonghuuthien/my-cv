import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSectionComponent } from './work-section.component';

describe('WorkSectionComponent', () => {
  let component: WorkSectionComponent;
  let fixture: ComponentFixture<WorkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
