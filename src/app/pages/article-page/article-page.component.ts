import { Component } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
	templateUrl: "./article-page.component.html",
	styleUrls: ["./article-page.component.scss"],
	standalone: false
})
export class ArticlePageComponent {
	dictionary: { [key: string]: { description: string } } = {
		Anna: { description: "Anna ist ein Mädchen, das in Deutschland lebt." },
		Österreich: { description: "Österreich ist ein Land in Europa." },
		Deutschland: { description: "Deutschland ist ein Land in Europa." },
		München: { description: "München ist eine Stadt in Deutschland." },
		Klara: { description: "Klara ist Annas Schwester." }
	}
	stories: {
		id: string
		imageSrc: string
		title: string
		text: string
	}[] = [
		{
			id: "haensel-und-gretel",
			imageSrc: "/images/haensel-und-gretel.jpg",
			title: "Hänsel und Gretel",
			text: "Hänsel und Gretel sind Geschwister, die im Wald verloren gehen. Sie finden ein Haus aus Lebkuchen und treffen eine Hexe."
		},
		{
			id: "maerzrevolution",
			imageSrc: "/images/maerzrevolution.jpg",
			title: "Die Deusche Märzrevolution",
			text: "Die Deutsche Märzrevolution von 1848 war ein wichtiger Schritt in der deutschen Geschichte, der zu mehr Freiheit und Demokratie führte."
		},
		{
			id: "physio",
			imageSrc: "/images/physio.jpg",
			title: "Physiotherapie",
			text: "Physiotherapie ist eine Behandlungsmethode, die Menschen hilft, sich von Verletzungen zu erholen und ihre Beweglichkeit zu verbessern."
		}
	]
	uuid = ""
	title = ""
	text = ""
	showPopup = false
	popupPosition = { x: 0, y: 0 }
	selectedWord = ""

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.uuid = this.activatedRoute.snapshot.paramMap.get("uuid")
		const story = this.stories.find(story => story.id === this.uuid)

		if (story != null) {
			this.title = story.title
			this.text = story.text
		}
	}

	onWordClick(event: Event, word: string) {
		if (!this.dictionary[word]) return

		this.selectedWord = word
		this.showPopup = true
		this.popupPosition = {
			x: (event as PointerEvent).clientX,
			y: (event as PointerEvent).clientY
		}
	}
}
