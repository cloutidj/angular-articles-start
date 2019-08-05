import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentProjectionComponent } from './content-projection.component';
import { InputCardComponent } from './input-card.component';

@NgModule({
	declarations: [
		ContentProjectionComponent,
		InputCardComponent
	],
	imports: [
		BrowserModule
	],
	exports: [
		ContentProjectionComponent
	],
	providers: []
})
export class ContentProjectionModule { }
