import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-detail',
	template: `
        <div class="alert alert-primary" role="alert">
            <strong>Detail ID:</strong> {{routeParam}}
        </div>

        <div>
            <strong>Random value:</strong> {{randomVal}}
        </div>
	`
})
export class DetailComponent implements OnInit, OnDestroy {
	public routeParam;
	public randomVal: number;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe(p => this.routeParam = p.detailId);

		this.randomVal = Math.floor(Math.random() * 100);
	}

	ngOnDestroy(): void {
		console.log(`Destroy detail: ${this.routeParam}`);
	}
}
