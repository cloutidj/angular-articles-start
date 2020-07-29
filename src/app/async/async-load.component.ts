import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
	selector: 'app-async-load',
	template: `
		<h3>Async Data Load</h3>
		TODO`
})
export class AsyncLoadComponent implements OnInit {
	constructor(private sampleService: SampleService) { }

	ngOnInit(): void {
		// TODO
	}
}
