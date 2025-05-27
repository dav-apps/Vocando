import { Routes } from "@angular/router"
import { StartPageComponent } from "./pages/start-page/start-page.component"
import { DiscoverPageComponent } from "./pages/discover-page/discover-page.component"
import { ArticlePageComponent } from "./pages/article-page/article-page.component"

export const routes: Routes = [
	{
		path: "",
		component: StartPageComponent
	},
	{
		path: "discover",
		component: DiscoverPageComponent
	},
	{
		path: "article/:uuid",
		component: ArticlePageComponent
	}
]
