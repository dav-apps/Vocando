import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import {
	BrowserModule,
	provideClientHydration
} from "@angular/platform-browser"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

// Local modules
import { AppRoutingModule } from "./app-routing.module"

// Components
import { AppComponent } from "./app.component"

// Pages
import { StartPageComponent } from "./pages/start-page/start-page.component"
import { DiscoverPageComponent } from "./pages/discover-page/discover-page.component"
import { ArticlePageComponent } from "./pages/article-page/article-page.component"

// Services
import { DataService } from "./services/data-service"

@NgModule({
	declarations: [
		AppComponent,
		StartPageComponent,
		DiscoverPageComponent,
		ArticlePageComponent
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		AppRoutingModule
	],
	providers: [
		DataService,
		provideClientHydration()
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
