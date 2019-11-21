import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTabPage } from './test-tab.page';

describe('TestTabPage', () => {
  let component: TestTabPage;
  let fixture: ComponentFixture<TestTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
