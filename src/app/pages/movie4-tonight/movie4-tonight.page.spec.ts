import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie4TonightPage } from './movie4-tonight.page';

describe('Movie4TonightPage', () => {
    let component: Movie4TonightPage;
    let fixture: ComponentFixture<Movie4TonightPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Movie4TonightPage ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Movie4TonightPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
