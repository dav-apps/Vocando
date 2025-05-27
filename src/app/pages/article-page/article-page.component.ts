import { Component, HostListener } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { DataService } from "../../services/data-service"

@Component({
	templateUrl: "./article-page.component.html",
	styleUrls: ["./article-page.component.scss"],
	standalone: false
})
export class ArticlePageComponent {
	dictionary: { [key: string]: { definition: string; type: string } } = {
		Im: {
			definition: "In (archaic/prepositional contraction)",
			type: "Preposition"
		},
		Frühling: { definition: "Spring (season)", type: "Noun" },
		des: { definition: "Of the (genitive article)", type: "Article" },
		Jahres: { definition: "Year (in genitive case)", type: "Noun" },
		"1848": { definition: "The year 1848", type: "Number" },
		lag: { definition: "Lay / was situated", type: "Verb" },
		ein: { definition: "A / an", type: "Article" },
		unruhiges: { definition: "Restless / uneasy", type: "Adjective" },
		Flüstern: { definition: "Whispering / murmur", type: "Noun" },
		über: { definition: "Over / above / across", type: "Preposition" },
		dem: { definition: "The (dative article)", type: "Article" },
		europäischen: {
			definition: "European (in dative form)",
			type: "Adjective"
		},
		Kontinent: { definition: "Continent", type: "Noun" },
		In: { definition: "In", type: "Preposition" },
		Paris: { definition: "Paris (city name)", type: "Proper Noun" },
		war: { definition: "Was", type: "Verb" },
		es: { definition: "It", type: "Pronoun" },
		zu: {
			definition: "To / towards / into (contextual preposition)",
			type: "Preposition"
		},
		einem: {
			definition: "A / an (dative masculine/neuter)",
			type: "Article"
		},
		Volksaufstand: {
			definition: "Popular uprising / people's revolt",
			type: "Noun"
		},
		gekommen: {
			definition: "Come / occurred (past participle)",
			type: "Verb"
		},
		der: {
			definition: "Who / which / the (relative/article)",
			type: "Article"
		},
		König: { definition: "King", type: "Noun" },
		"Louis-Philippe": {
			definition: "Louis-Philippe (name of the king)",
			type: "Proper Noun"
		},
		zur: {
			definition: "To the (contraction of 'zu der')",
			type: "Preposition + Article"
		},
		Abdankung: { definition: "Abdication", type: "Noun" },
		zwang: { definition: "Forced", type: "Verb" },
		Innerhalb: { definition: "Within", type: "Preposition" },
		weniger: { definition: "Few / fewer", type: "Adjective" },
		Wochen: { definition: "Weeks", type: "Noun" },
		griffen: { definition: "Reached / spread to / seized", type: "Verb" },
		die: { definition: "The", type: "Article" },
		revolutionären: { definition: "Revolutionary", type: "Adjective" },
		Wellen: { definition: "Waves", type: "Noun" },
		auf: { definition: "To / on", type: "Preposition" },
		Wien: { definition: "Vienna (city name)", type: "Proper Noun" },
		Mailand: { definition: "Milan (city name)", type: "Proper Noun" },
		und: { definition: "And", type: "Conjunction" },
		schließlich: { definition: "Finally / eventually", type: "Adverb" },
		auch: { definition: "Also / too", type: "Adverb" },
		deutschen: { definition: "German", type: "Adjective" },
		Staaten: { definition: "States", type: "Noun" },
		Märzrevolution: { definition: "March Revolution", type: "Noun" },
		wie: { definition: "As / like", type: "Conjunction" },
		sie: { definition: "She / they", type: "Pronoun" },
		später: { definition: "Later", type: "Adverb" },
		genannt: { definition: "Called / named (past participle)", type: "Verb" },
		werden: {
			definition: "To become / be (passive auxiliary)",
			type: "Verb"
		},
		sollte: { definition: "Should / was supposed to", type: "Verb" },
		geboren: { definition: "Born", type: "Adjective/Participle" },
		Deutschland: { definition: "Germany", type: "Proper Noun" },
		jener: { definition: "That (masc./gen. demonstrative)", type: "Pronoun" },
		Zeit: { definition: "Time / era", type: "Noun" },
		kein: { definition: "No / not a", type: "Article" },
		einheitlicher: { definition: "Unified / homogeneous", type: "Adjective" },
		Nationalstaat: { definition: "Nation-state", type: "Noun" },
		sondern: { definition: "But rather / instead", type: "Conjunction" },
		Flickenteppich: {
			definition: "Patchwork / patchwork quilt (figurative)",
			type: "Noun"
		},
		Königreichen: { definition: "Kingdoms", type: "Noun" },
		Herzogtümern: { definition: "Duchies", type: "Noun" },
		freien: { definition: "Free", type: "Adjective" },
		Städten: { definition: "Cities", type: "Noun" },
		lose: { definition: "Loosely", type: "Adverb" },
		zusammengehalten: { definition: "Held together", type: "Verb" },
		vom: { definition: "By the (von dem)", type: "Preposition + Article" },
		Straßen: { definition: "Streets", type: "Noun" },
		Berlins: { definition: "Of Berlin", type: "Proper Noun (Genitive)" },
		Frankfurts: {
			definition: "Of Frankfurt",
			type: "Proper Noun (Genitive)"
		},
		anderer: {
			definition: "Other (genitive/dative/plural)",
			type: "Adjective"
		},
		gärte: { definition: "Was fermenting / seething", type: "Verb" },
		seit: { definition: "Since / for (time)", type: "Preposition" },
		Jahren: { definition: "Years", type: "Noun" },
		Menschen: { definition: "People / humans", type: "Noun" },
		litten: { definition: "Suffered", type: "Verb" },
		unter: { definition: "Under", type: "Preposition" },
		wirtschaftlicher: {
			definition: "Economic (feminine/genitive)",
			type: "Adjective"
		},
		Not: { definition: "Hardship / distress / need", type: "Noun" },
		Zensur: { definition: "Censorship", type: "Noun" },
		politischer: {
			definition: "Political (feminine/genitive)",
			type: "Adjective"
		},
		Willkür: { definition: "Arbitrariness / despotism", type: "Noun" },
		Mangel: { definition: "Lack / shortage", type: "Noun" },
		Mitbestimmung: {
			definition: "Participation / co-determination",
			type: "Noun"
		},
		Bürgerliche: {
			definition: "Middle-class people / bourgeois",
			type: "Noun"
		},
		Intellektuelle: { definition: "Intellectuals", type: "Noun" },
		Studenten: { definition: "Students", type: "Noun" },
		Handwerker: { definition: "Craftsmen", type: "Noun" },
		Arbeiter: { definition: "Workers", type: "Noun" },
		sehnten: { definition: "Longed (for)", type: "Verb" },
		sich: { definition: "Themselves / reflexive pronoun", type: "Pronoun" },
		nach: {
			definition: "After / for (context: desire)",
			type: "Preposition"
		},
		Freiheit: { definition: "Freedom", type: "Noun" },
		Gleichheit: { definition: "Equality", type: "Noun" },
		nationaler: {
			definition: "National (feminine/genitive)",
			type: "Adjective"
		},
		Einheit: { definition: "Unity", type: "Noun" },
		Am: { definition: "On the (an dem)", type: "Preposition + Article" },
		erreichte: { definition: "Reached", type: "Verb" },
		Metropole: { definition: "Metropolis", type: "Noun" },
		Habsburgerreiches: {
			definition: "Habsburg Empire (genitive form)",
			type: "Proper Noun"
		}
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
	popupPosition = 0
	selectedWord = ""

	constructor(
		private activatedRoute: ActivatedRoute,
		private dataService: DataService
	) {}

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

	@HostListener("document:click", ["$event"])
	handleDocumentClick(event: MouseEvent) {
		if (this.showPopup) {
			const target = event.target as HTMLElement

			if (!target.closest(".highlight") && !target.closest(".popup")) {
				this.showPopup = false
			}
		}
	}

	onWordClick(event: Event, word: string) {
		if (!this.dictionary[word]) return
		console.log(event)

		this.selectedWord = word
		this.showPopup = true
		this.popupPosition =
			(event as PointerEvent).y + this.dataService.contentContainer.scrollTop
	}
}
