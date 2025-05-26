import { Routes } from "@angular/router"
import { ArticlePageComponent } from "./pages/article-page/article-page.component"
import { DiscoverPageComponent } from "./pages/discover-page/discover-page.component"

export const routes: Routes = [
	{
		path: "discover",
		component: DiscoverPageComponent
	},
	{
		path: "article",
		component: ArticlePageComponent
	}
]
