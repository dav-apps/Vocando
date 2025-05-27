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
		},
		Physiotherapie: {
			definition: "Physiotherapy / physical therapy",
			type: "Noun"
		},
		zentraler: {
			definition: "Central / key (adjective, masc. nom.)",
			type: "Adjective"
		},
		Bestandteil: { definition: "Component / integral part", type: "Noun" },
		moderner: {
			definition: "Modern (adjective, genitive form)",
			type: "Adjective"
		},
		Gesundheitsversorgung: {
			definition: "Healthcare / health service provision",
			type: "Noun"
		},
		dient: { definition: "Serves / functions as", type: "Verb" },
		nur: { definition: "Only / just", type: "Adverb" },
		Rehabilitation: { definition: "Rehabilitation", type: "Noun" },
		Verletzungen: { definition: "Injuries", type: "Noun" },
		Operationen: { definition: "Surgeries / operations", type: "Noun" },
		spielt: { definition: "Plays", type: "Verb" },
		entscheidende: { definition: "Decisive / crucial", type: "Adjective" },
		Rolle: { definition: "Role", type: "Noun" },
		Prävention: { definition: "Prevention", type: "Noun" },
		Schmerzbehandlung: {
			definition: "Pain treatment / pain management",
			type: "Noun"
		},
		langfristigen: {
			definition: "Long-term (adjective, dative/genitive)",
			type: "Adjective"
		},
		Erhaltung: { definition: "Preservation / maintenance", type: "Noun" },
		körperlicher: {
			definition: "Physical (genitive form)",
			type: "Adjective"
		},
		Funktionen: { definition: "Functions", type: "Noun" },
		Dieses: {
			definition: "This (neuter, nominative)",
			type: "Pronoun/Determiner"
		},
		Lehrbuch: { definition: "Textbook", type: "Noun" },
		richtet: { definition: "Addresses / targets", type: "Verb" },
		an: { definition: "At / to", type: "Preposition" },
		Studierende: {
			definition: "Students (gender-neutral form)",
			type: "Noun"
		},
		"Berufseinsteiger*innen": {
			definition: "Career starters / entry-level professionals (inclusive)",
			type: "Noun"
		},
		sowie: { definition: "As well as", type: "Conjunction" },
		Fachpersonen: { definition: "Professionals / experts", type: "Noun" },
		Gesundheitswesen: { definition: "Healthcare system", type: "Noun" },
		fundiertes: { definition: "Well-founded / sound", type: "Adjective" },
		Verständnis: { definition: "Understanding", type: "Noun" },
		für: { definition: "For", type: "Preposition" },
		praktische: { definition: "Practical", type: "Adjective" },
		Anwendung: { definition: "Application / use", type: "Noun" },
		physiotherapeutischer: {
			definition: "Physiotherapeutic (genitive form)",
			type: "Adjective"
		},
		Maßnahmen: { definition: "Measures / actions", type: "Noun" },
		gewinnen: { definition: "To gain / acquire", type: "Verb" },
		möchten: { definition: "Would like to", type: "Verb" },
		einmal: { definition: "Once / once upon a time", type: "Adverb" },
		tief: { definition: "Deep", type: "Adjective/Adverb" },
		finsteren: { definition: "Dark / gloomy", type: "Adjective" },
		Wald: { definition: "Forest / woods", type: "Noun" },
		kleines: { definition: "Small / little (neuter)", type: "Adjective" },
		Häuschen: { definition: "Little house / cottage", type: "Noun" },
		Rande: { definition: "Edge / border (dative)", type: "Noun" },
		Lichtung: { definition: "Clearing (in a forest)", type: "Noun" },
		Dort: { definition: "There", type: "Adverb" },
		armer: { definition: "Poor", type: "Adjective" },
		Holzhacker: { definition: "Woodcutter", type: "Noun" },
		seinen: {
			definition: "His (accusative plural)",
			type: "Pronoun/Determiner"
		},
		zwei: { definition: "Two", type: "Number" },
		Kindern: { definition: "Children (dative)", type: "Noun" },
		Hänsel: { definition: "Hänsel (boy's name)", type: "Proper Noun" },
		Gretel: { definition: "Gretel (girl's name)", type: "Proper Noun" },
		Mann: { definition: "Man / husband", type: "Noun" },
		arbeitete: { definition: "Worked", type: "Verb" },
		hart: { definition: "Hard / tough", type: "Adjective/Adverb" },
		knapp: { definition: "Scarce / barely enough", type: "Adjective" },
		Hunger: { definition: "Hunger", type: "Noun" },
		wohnte: { definition: "Lived / resided", type: "Verb" },
		oft: { definition: "Often", type: "Adverb" },
		Tisch: { definition: "Table", type: "Noun" },
		kluger: { definition: "Clever / smart", type: "Adjective" },
		Junge: { definition: "Boy", type: "Noun" },
		wachen: { definition: "Alert / watchful", type: "Adjective" },
		Augen: { definition: "Eyes", type: "Noun" },
		mutigen: { definition: "Brave / courageous", type: "Adjective" },
		Herzen: { definition: "Heart (dative/genitive)", type: "Noun" },
		jüngere: { definition: "Younger", type: "Adjective" },
		Schwester: { definition: "Sister", type: "Noun" },
		sanft: { definition: "Gentle / soft", type: "Adjective" },
		neugierig: { definition: "Curious", type: "Adjective" },
		ebenso: { definition: "Just as / equally", type: "Adverb" },
		tapfer: { definition: "Brave / valiant", type: "Adjective" },
		Bruder: { definition: "Brother", type: "Noun" },
		hielten: { definition: "Held / stuck together", type: "Verb" },
		immer: { definition: "Always", type: "Adverb" },
		zusammen: { definition: "Together", type: "Adverb" },
		selbst: { definition: "Even / themselves", type: "Adverb/Pronoun" },
		wenn: { definition: "If / when", type: "Conjunction" },
		Wind: { definition: "Wind", type: "Noun" },
		durch: { definition: "Through", type: "Preposition" },
		Ritzen: { definition: "Cracks / gaps", type: "Noun" },
		Hauses: { definition: "House (genitive)", type: "Noun" },
		pfiff: { definition: "Whistled / blew", type: "Verb" },
		Magen: { definition: "Stomach", type: "Noun" },
		knurrte: { definition: "Growled / grumbled", type: "Verb" },
		hungriger: {
			definition: "Hungry (masculine adjective form)",
			type: "Adjective"
		},
		Wolf: { definition: "Wolf", type: "Noun" },
		Eines: {
			definition: "One (day/evening – indefinite article neuter genitive)",
			type: "Determiner"
		},
		Abends: { definition: "In the evening (genitive)", type: "Noun" },
		Mond: { definition: "Moon", type: "Noun" },
		silberner: { definition: "Silver (adjective form)", type: "Adjective" },
		Teller: { definition: "Plate", type: "Noun" },
		Himmel: { definition: "Sky / heaven", type: "Noun" },
		hing: { definition: "Hung", type: "Verb" },
		hörten: { definition: "Heard", type: "Verb" },
		Gespräch: { definition: "Conversation / talk", type: "Noun" },
		zwischen: { definition: "Between", type: "Preposition" },
		Eltern: { definition: "Parents", type: "Noun" }
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
			chapterTitle: "Kapitel 1: Der dunkle Wald",
			chapterSubtitle:
				"Hänsel und Gretel leben mit ihrem armen Vater und ihrer hartherzigen Stiefmutter in einem kleinen Haus am Waldrand. Als die Eltern beschließen, die Kinder im Wald auszusetzen, belauscht Hänsel das Gespräch und sammelt heimlich Kieselsteine, um den Weg zurückzufinden. Am nächsten Morgen werden die Geschwister in den tiefen Wald geführt, ohne zu wissen, was sie dort erwartet.",
			text: `
Es war einmal, tief in einem finsteren Wald, ein kleines Häuschen am Rande einer Lichtung. Dort lebte ein armer Holzhacker mit seiner Frau und seinen zwei Kindern, Hänsel und Gretel. Der Mann arbeitete hart, doch das Brot war knapp, und der Hunger wohnte oft mit am Tisch.

Hänsel war ein kluger Junge mit wachen Augen und einem mutigen Herzen. Gretel, seine jüngere Schwester, war sanft und neugierig, doch ebenso tapfer wie ihr Bruder. Sie hielten immer zusammen, selbst wenn der Wind durch die Ritzen des Hauses pfiff und der Magen knurrte wie ein hungriger Wolf.

Eines Abends, als der Mond wie ein silberner Teller am Himmel hing, hörten die Kinder ein Gespräch zwischen den Eltern. Die Stiefmutter, deren Herz hart wie Stein war, flüsterte mit kalter Stimme: „Wir haben nicht genug zu essen. Wir müssen die Kinder morgen in den Wald bringen und sie dort lassen.“ Der Vater seufzte schwer. „Ich kann das nicht tun. Es sind doch unsere Kinder.“ Doch die Frau ließ nicht locker.

Hänsel, der das Gespräch belauscht hatte, schlich sich in der Nacht hinaus. Im Garten suchte er nach weißen Kieselsteinen, die im Mondlicht glänzten wie kleine Sterne. Er füllte seine Taschen damit, klamm und entschlossen. Gretel fragte ihn am Morgen, was er da tue, doch Hänsel lächelte nur und sagte: „Vertrau mir.“

So machten sie sich auf den Weg in den Wald – tiefer und weiter, als sie je zuvor gegangen waren. Die Bäume wurden dichter, das Licht schwächer, und das Flüstern des Waldes klang wie tausend fremde Stimmen. Doch Hänsel blickte nicht zurück. Noch nicht.
			`
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
			chapterTitle:
				"Kapitel 1: Einführung in die Physiotherapie im Gesundheitswesen",
			chapterSubtitle:
				"Die Physiotherapie ist ein zentraler Bestandteil der Gesundheitsversorgung und zielt auf Rehabilitation, Prävention und die Förderung von Lebensqualität ab. Sie basiert auf evidenzbasierter Praxis und interdisziplinärer Zusammenarbeit, wobei Patient*innen aktiv in den Therapieprozess einbezogen werden. Dieses Lehrbuch vermittelt praxisnah die nötigen Kompetenzen für verschiedene Fachbereiche der Physiotherapie im klinischen Alltag.",
			text: `
Die Physiotherapie ist ein zentraler Bestandteil moderner Gesundheitsversorgung. Sie dient nicht nur der Rehabilitation nach Verletzungen oder Operationen, sondern spielt auch eine entscheidende Rolle in der Prävention, Schmerzbehandlung und der langfristigen Erhaltung körperlicher Funktionen. Dieses Lehrbuch richtet sich an Studierende und Berufseinsteiger*innen in der Physiotherapie sowie an Fachpersonen im Gesundheitswesen, die ein fundiertes Verständnis für die praktische Anwendung physiotherapeutischer Maßnahmen gewinnen möchten.

In diesem ersten Kapitel möchten wir einen Überblick über die Rolle der Physiotherapie im interdisziplinären Kontext des Gesundheitswesens geben. Physiotherapeutinnen arbeiten eng mit Ärztinnen, Pflegefachkräften, Ergotherapeutinnen und weiteren Gesundheitsberufen zusammen, um individuelle Therapiepläne zu entwickeln, die auf den Bedürfnissen der Patientinnen basieren. Der Fokus liegt dabei nicht nur auf der Behandlung von Symptomen, sondern auf der Förderung der Selbstständigkeit und Lebensqualität.

Ein weiteres zentrales Thema ist die evidenzbasierte Praxis. Die moderne Physiotherapie stützt sich auf wissenschaftliche Erkenntnisse, klinische Erfahrung und die individuellen Präferenzen der Patient*innen. Dieser Dreiklang bildet die Grundlage für wirksame und zielgerichtete Therapieentscheidungen. Ein Verständnis für medizinische Grundlagen, Pathologien und therapeutische Prinzipien ist daher essenziell.

Abschließend soll dieses Kapitel das Verständnis fördern, dass Physiotherapie weit mehr ist als „Bewegungstherapie“. Sie ist ein aktiver, oft lebensbegleitender Prozess, der Patient*innen befähigt, Verantwortung für ihren Körper und ihre Gesundheit zu übernehmen. Die kommenden Kapitel führen praxisnah in relevante Arbeitsfelder wie Orthopädie, Neurologie, Pädiatrie und Geriatrie ein, und vermitteln die nötigen Kompetenzen, um im klinischen Alltag fundierte Entscheidungen zu treffen und wirkungsvoll zu therapieren.
			`
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

		this.selectedWord = word
		this.showPopup = true
		this.popupPosition =
			(event as PointerEvent).y + this.dataService.contentContainer.scrollTop
	}
}
