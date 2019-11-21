import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepTabPage } from './prep-tab.page';

describe('PrepTabPage', () => {
  let component: PrepTabPage;
  let fixture: ComponentFixture<PrepTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
