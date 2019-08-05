import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { IconDefinition, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

class RatingStar {
	icon: IconDefinition;
	index: number;
	selected: boolean;

	constructor(index: number, rating: number) {
		this.index = index;
		this.selected = index < rating;
		this.icon = this.selected ? faStarSolid : faStarEmpty;
	}
}

@Component({
	selector: 'app-rating-control',
	template: `
        <div>
            <fa-icon
                    *ngFor="let star of ratingStars; let i = index"
                    [icon]="star.icon"
                    (click)="setRating(i)"
                    size="lg"
                    [ngClass]="{'selected': star.selected}">
            </fa-icon>
        </div>`,
	styles: [
			`
            fa-icon {
                cursor: pointer;
            }

            fa-icon.selected {
                color: GoldenRod;
            }` ]
})
export class RatingControlComponent implements OnChanges {
	@Input() maxRating = 10;
	@Input() rating: number;
	@Output() ratingChange = new EventEmitter<number>();

	public ratingStars: RatingStar[] = [];

	ngOnChanges(): void {
		this.calculateRating();
	}

	private calculateRating(): void {
		this.ratingStars = [];
		for (let i = 0; i < this.maxRating; i++) {
			this.ratingStars.push(new RatingStar(i, this.rating));
		}
	}

	setRating(index: number): void {
		this.rating = index + 1;
		this.calculateRating();
		this.ratingChange.emit(this.rating);
	}
}
