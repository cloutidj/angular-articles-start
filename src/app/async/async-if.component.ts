import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
	selector: 'app-async-if',
	template: `
		<h3>Async Data Load With If</h3>
		TODO`
})
export class AsyncIfComponent implements OnInit {
	constructor(private sampleService: SampleService) { }

	ngOnInit(): void {
		// TODO
	}
}
