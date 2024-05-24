import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectDescriptionComponent } from './card-project-description.component';

describe('CardProjectDescriptionComponent', () => {
  let component: CardProjectDescriptionComponent;
  let fixture: ComponentFixture<CardProjectDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjectDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjectDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
