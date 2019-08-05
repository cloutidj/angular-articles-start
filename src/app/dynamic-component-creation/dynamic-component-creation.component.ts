import {
	Component,
	OnInit,
	ViewChildren,
	ViewContainerRef,
	QueryList
} from '@angular/core';
import { ComponentRequest } from './create-request.component';

@Component({
	selector: 'app-dynamic-component-creation',
	template: `
        <div class="container-fluid">
            <div class="row">
                <app-create-request class="col" [viewPorts]="viewPorts" (createComponent)="addToViewport($event)"></app-create-request>
            </div>
            <div class="row card-deck justify-content-between">
                <div class="col-6" *ngFor="let port of viewPorts">
                    <div class="card mt-3">
                        <div class="card-header">
                            <h3>View Port #{{port}}</h3>
                        </div>
                        <div class="card-body">
                            <!-- TODO: Components go here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})
export class DynamicComponentCreationComponent implements OnInit {
	public viewPorts: number[] = [ 1, 2, 3, 4 ];
	@ViewChildren('componentTarget', { read: ViewContainerRef }) targets: QueryList<ViewContainerRef>;

	constructor() { }

	ngOnInit(): void {
		// TODO
	}

	public addToViewport(request: ComponentRequest): void {
		// TODO
	}
}
