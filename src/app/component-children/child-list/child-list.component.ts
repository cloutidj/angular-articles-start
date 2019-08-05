import { Input, Component } from '@angular/core';
import { ListItemInterface } from '../models/list-item.interface';

@Component({
	selector: 'app-child-list',
	template: `
		<div class="list-group">
			<div
				class="list-group-item list-group-item-action"
				*ngFor="let item of items; let i = index"
				[ngClass]="{'active': item.isSelected}"
				(click)="toggleItem(i)"
			>{{item.display}}</div>
		</div>
		`,
	styles: [`
		.list-group-item-action {
			color: inherit;
		}
	`]
})
export class ChildListComponent {
	@Input() items: ListItemInterface[];

	public toggleItem(i: number): void {
		this.items[i].isSelected = !this.items[i].isSelected;
	}
}
