import { Component } from "@angular/core"
import { Router } from "@angular/router"

@Component({
	templateUrl: "./discover-page.component.html",
	styleUrls: ["./discover-page.component.scss"],
	standalone: false
})
export class DiscoverPageComponent {
	stories: {
		id: string
		title: string
	}[] = [
		{
			id: "haensel-und-gretel",
			title: "Hänsel und Gretel"
		},
		{
			id: "maerzrevolution",
			title: "Die Deutsche Märzrevolution"
		},
		{
			id: "physio",
			title: "Physio im Gesundheitswesen"
		}
	]

	constructor(private router: Router) {}

	itemClicked(event: Event, article: { id: string }) {
		event.preventDefault()
		this.router.navigate(["article", article.id])
	}
}
