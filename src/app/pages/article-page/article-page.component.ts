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
		chapterTitle: string
		chapterSubtitle: string
		text: string
	}[] = [
		{
			id: "haensel-und-gretel",
			imageSrc: "/images/haensel-und-gretel.jpg",
			title: "Hänsel und Gretel",
			chapterTitle: "Kapitel 1: Im Wald verloren",
			chapterSubtitle: "Ein Märchen der Brüder Grimm",
			text: "Hänsel und Gretel sind Geschwister, die im Wald verloren gehen. Sie finden ein Haus aus Lebkuchen und treffen eine Hexe."
		},
		{
			id: "maerzrevolution",
			imageSrc: "/images/maerzrevolution-01.jpg",
			title: "Die Deusche Märzrevolution",
			chapterTitle: "Kapitel 1: Ein Funke in Europa",
			chapterSubtitle:
				"Im März 1848 brachen in vielen deutschen Staaten revolutionäre Unruhen aus, angestoßen durch die Ereignisse in Paris und Wien. Die Bevölkerung forderte politische Mitbestimmung, Pressefreiheit und nationale Einheit, was zu Protesten und Barrikadenkämpfen führte, insbesondere in Berlin. König Friedrich Wilhelm IV. versprach Reformen, doch blieb unklar, ob die Revolution dauerhaft etwas verändern würde.",
			text: `
Im Frühling des Jahres 1848 lag ein unruhiges Flüstern über dem europäischen Kontinent. In Paris war es zu einem Volksaufstand gekommen, der König Louis-Philippe zur Abdankung zwang. Innerhalb weniger Wochen griffen die revolutionären Wellen über auf Wien, Mailand und schließlich auch auf die deutschen Staaten. Die Märzrevolution – wie sie später genannt werden sollte – war geboren.

Deutschland war zu jener Zeit kein einheitlicher Nationalstaat, sondern ein Flickenteppich aus Königreichen, Herzogtümern und freien Städten, lose zusammengehalten vom Deutschen Bund. In den Straßen Berlins, Frankfurts und anderer Städte gärte es seit Jahren. Die Menschen litten unter wirtschaftlicher Not, Zensur, politischer Willkür und dem Mangel an Mitbestimmung. Bürgerliche Intellektuelle, Studenten, Handwerker und Arbeiter sehnten sich nach Freiheit, Gleichheit und nationaler Einheit.

Am 13. März 1848 erreichte die Revolution Wien – Metropole des Habsburgerreiches. Nur drei Tage später entlud sich die Spannung auch in Berlin: Nach zunächst friedlichen Demonstrationen auf dem Schlossplatz eskalierte die Lage, als preußische Truppen das Feuer auf die Menge eröffneten. Die Straßenkämpfe begannen.

König Friedrich Wilhelm IV. stand vor einer Entscheidung: weiter mit Gewalt regieren – oder nachgeben. Unter dem Eindruck der Barrikadenkämpfe in Berlin und dem Druck der Bevölkerung lenkte er scheinbar ein. In einer viel beachteten Proklamation erklärte er sich bereit, an der Spitze einer Bewegung für ein freies und vereintes Deutschland zu stehen.

Überall in den deutschen Ländern wurden nun sogenannte Märzforderungen laut: Pressefreiheit, Versammlungsfreiheit, ein deutsches Nationalparlament. Der revolutionäre Geist wehte durch die Gassen, getragen von Flugblättern, Debatten und der Hoffnung auf einen tiefgreifenden Wandel.

Was als Aufbegehren gegen die Unterdrückung begann, war nun zur gesamtdeutschen Bewegung geworden. Doch die Frage blieb: War dies der Aufbruch in eine neue Zeit – oder nur ein kurzes Aufflackern im langen Schatten der Restauration?
			`
		},
		{
			id: "physio",
			imageSrc: "/images/physio.jpg",
			title: "Physiotherapie",
			chapterTitle: "Kapitel 1: Heilung durch Bewegung",
			chapterSubtitle: "Ein Blick auf die Physiotherapie",
			text: "Physiotherapie ist eine Behandlungsmethode, die Menschen hilft, sich von Verletzungen zu erholen und ihre Beweglichkeit zu verbessern."
		}
	]
	uuid = ""
	title = ""
	chapterTitle = ""
	chapterSubtitle = ""
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
			this.chapterTitle = story.chapterTitle
			this.chapterSubtitle = story.chapterSubtitle
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
