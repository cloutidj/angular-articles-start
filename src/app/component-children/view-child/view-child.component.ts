import { Component } from '@angular/core';
import { ListItemInterface } from '../models/list-item.interface';

@Component({
	selector: 'app-view-child',
	template: `
        <div class="btn-group pb-5">
            <button class="btn btn-secondary" *ngFor="let item of items; let i = index" (click)="toggleItem(i)">{{item.display}}</button>
        </div>
        <app-child-list [items]="items"></app-child-list>`
})
export class ViewChildComponent {
	public items: ListItemInterface[] = [
		{ display: 'Apple', isSelected: false },
		{ display: 'Orange', isSelected: false },
		{ display: 'Banana', isSelected: false },
		{ display: 'Kiwi', isSelected: false },
		{ display: 'Lemon', isSelected: false }
	];

	public toggleItem(index: number): void {
		// TODO
	}
}
