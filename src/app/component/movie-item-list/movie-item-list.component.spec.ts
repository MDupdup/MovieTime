import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemListPage } from './movie-item-list.page';

describe('MovieItemListPage', () => {
  let component: MovieItemListPage;
  let fixture: ComponentFixture<MovieItemListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
