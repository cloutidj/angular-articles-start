import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReportComponent } from './report.component';
import { SearchService } from '../shared/search.service';
import { ItemInterface } from '../shared/item.interface';
import { of } from 'rxjs';

describe('ReportComponent', () => {
	let component: ReportComponent;
	let fixture: ComponentFixture<ReportComponent>;
	let searchService: jasmine.SpyObj<SearchService>;

	const testData: ItemInterface[] = [
		{ name: 'Apples', description: 'Juicy, red, and delicious' },
		{ name: 'Socks', description: 'So your feet don\'t get cold' },
		{ name: 'Tires', description: 'Because we sell everything' } ];

	beforeEach(() => {
		searchService = jasmine.createSpyObj([ 'search' ]);
		searchService.search.and.returnValue(of(testData));

		TestBed.configureTestingModule({
			declarations: [ ReportComponent ],
			providers: [
				{ provide: SearchService, useValue: searchService }
			],
			schemas: [ NO_ERRORS_SCHEMA ]
		}).compileComponents();

		fixture = TestBed.createComponent(ReportComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should run a search', () => {
		// TODO
	});

	it('should not run a search for invalid criteria', () => {
		// TODO
	});
});
