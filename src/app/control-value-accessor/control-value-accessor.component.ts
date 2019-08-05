import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-control-value-accessor',
	template: `
        <form [formGroup]="testForm" autocomplete="off" class="w-25 was-validated">
            <div class="form-group">
                <label>Test Input</label>
                <input class="form-control" type="text" formControlName="testInput">
            </div>

            <div class="form-group">
                <label>Rating</label>
                <app-rating-control [maxRating]="5" [(rating)]="rating"></app-rating-control>
            </div>
        </form>
        <button class="btn btn-secondary" (click)="testForm.disable()">Disable Form</button>
        <button class="btn btn-success" (click)="testForm.enable()">Enable Form</button>
        <button class="btn btn-danger" (click)="testForm.reset()">Reset Form</button>
        <div style="white-space: pre">
            Rating: {{ rating }}<br/>
            {{testForm.value | json}}<br/>
            Touched: {{testForm.touched | json}}<br/>
            Valid: {{testForm.valid}}<br/>
            Errors: {{testForm.controls['rating']?.errors | json}}<br/>
        </div>`
})
export class ControlValueAccessorComponent implements OnInit {
	public testForm: FormGroup;
	public rating;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.testForm = this.formBuilder.group({
			testInput: 'abc',
			rating: 3
		});
	}
}
