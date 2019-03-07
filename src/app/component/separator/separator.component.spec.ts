import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorPage } from './separator.page';

describe('SeparatorPage', () => {
  let component: SeparatorPage;
  let fixture: ComponentFixture<SeparatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
