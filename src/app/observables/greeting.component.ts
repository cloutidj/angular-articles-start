import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
	selector: 'app-greeting',
	template: '<div>Hello, {{user?.name}}</div>'
})
export class GreetingComponent implements OnInit {
	public user;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.userService.currentUser().subscribe(newUser => {
			this.user = newUser;
			console.log(newUser);
		});
	}
}
