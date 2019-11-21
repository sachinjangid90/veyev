import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsTabPage } from './feeds-tab.page';

describe('FeedsTabPage', () => {
  let component: FeedsTabPage;
  let fixture: ComponentFixture<FeedsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
