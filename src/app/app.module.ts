import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartDumbCombinedModule } from './smart-dumb/combined/combined.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		AppRouting,
		NgbModule,
		SmartDumbCombinedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
