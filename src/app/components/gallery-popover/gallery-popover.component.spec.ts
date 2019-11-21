import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPopoverComponent } from './gallery-popover.component';

describe('GalleryPopoverComponent', () => {
  let component: GalleryPopoverComponent;
  let fixture: ComponentFixture<GalleryPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
