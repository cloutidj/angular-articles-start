import { OnInit, Component} from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-user-form',
	template: `
		<form [formGroup]="userForm" class="was-validated">
			<div class="form-group">
				<label for="firstName">First Name</label>
				<input id="firstName" type="text" class="form-control" formControlName="firstName">
			</div>
			<div class="form-group">
				<label for="lastName">Last Name</label>
				<input id="lastName" type="text" class="form-control" formControlName="lastName" required>
				<div class="invalid-feedback">
          			Last Name is required
        		</div>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input id="email" type="email" class="form-control" formControlName="email">
				<div class="invalid-feedback">
          			Not a valid email address
        		</div>
			</div>
		</form>`
})
export class UserFormComponent implements OnInit {
	public userForm: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.userForm = this.formBuilder.group({
			firstName: null,
			lastName: [null, Validators.required],
			email: [null, Validators.email]
		});
	}
}
