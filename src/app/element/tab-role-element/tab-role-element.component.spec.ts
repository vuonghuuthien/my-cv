import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRoleElementComponent } from './tab-role-element.component';

describe('TabRoleElementComponent', () => {
  let component: TabRoleElementComponent;
  let fixture: ComponentFixture<TabRoleElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabRoleElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabRoleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
