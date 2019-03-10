import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Movie4tonightPage} from './movie4tonight.page';

describe('Movie4tonightPage', () => {
    let component: Movie4tonightPage;
    let fixture: ComponentFixture<Movie4tonightPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Movie4tonightPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Movie4tonightPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
