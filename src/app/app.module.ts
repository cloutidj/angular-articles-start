import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartDumbCombinedModule } from './smart-dumb/combined/combined.module';
import { ObservablesModule } from './observables/observables.module';
import { AsyncModule } from './async/async.module';
import { ComponentChilrenModule } from './component-children/component-chilren.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { DynamicComponentCreationModule } from './dynamic-component-creation/dynamic-component-creation.module';
import { ComponentScopeModule } from './component-scope/component-scope.module';
import { ControlValueAccessorModule } from './control-value-accessor/control-value-accessor.module';
import { RouterReuseModule } from './router-reuse/router-reuse.module';
import { ComponentTestingModule } from './component-testing/component-testing.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		AppRouting,
		NgbModule,
		AsyncModule,
		ComponentChilrenModule,
		ComponentScopeModule,
		ComponentTestingModule,
		ContentProjectionModule,
		ControlValueAccessorModule,
		DynamicComponentCreationModule,
		ObservablesModule,
		RouterReuseModule,
		SmartDumbCombinedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
