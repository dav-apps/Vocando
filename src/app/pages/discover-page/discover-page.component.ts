import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

@Component({
	templateUrl: "./discover-page.component.html",
	styleUrls: ["./discover-page.component.scss"],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DiscoverPageComponent {
	stories: {
		title: string
		imageSrc: string
	}[] = [
		{
			title: "Hänsel und Gretel",
			imageSrc: "/images/haensel-und-gretel.jpg"
		},
		{
			title: "Die Deutsche Märzrevolution",
			imageSrc: "/images/maerzrevolution.jpg"
		},
		{
			title: "Physio im Gesundheitswesen",
			imageSrc: "/images/physio.jpg"
		}
	]
}
