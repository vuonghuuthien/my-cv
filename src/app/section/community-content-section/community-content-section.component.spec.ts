import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityContentSectionComponent } from './community-content-section.component';

describe('CommunityContentSectionComponent', () => {
  let component: CommunityContentSectionComponent;
  let fixture: ComponentFixture<CommunityContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityContentSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
