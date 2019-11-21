import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTabPage } from './dashboard-tab.page';

describe('DashboardTabPage', () => {
  let component: DashboardTabPage;
  let fixture: ComponentFixture<DashboardTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
