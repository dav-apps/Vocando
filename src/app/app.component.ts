import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { NavigationStart, Router } from "@angular/router"
import {
	faCircleUser as faCircleUserSolid,
	faGear as faGearSolid,
	faHouse as faHouseSolid
} from "@fortawesome/free-solid-svg-icons"
import { faSparkles as faSparklesSolid } from "@fortawesome/pro-solid-svg-icons"
import {
	faCircleUser as faCircleUserRegular,
	faGear as faGearRegular,
	faHouse as faHouseRegular,
	faSparkles as faSparklesRegular
} from "@fortawesome/pro-regular-svg-icons"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import * as DavUIComponents from "dav-ui-components"
import { DataService } from "./services/data-service"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
	standalone: true,
	imports: [FontAwesomeModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [DataService]
})
export class AppComponent {
	faCircleUserSolid = faCircleUserSolid
	faCircleUserRegular = faCircleUserRegular
	faGearSolid = faGearSolid
	faGearRegular = faGearRegular
	faHouseSolid = faHouseSolid
	faHouseRegular = faHouseRegular
	faSparklesSolid = faSparklesSolid
	faSparklesRegular = faSparklesRegular
	dictionary: { [key: string]: { description: string } } = {
		Anna: { description: "Anna ist ein Mädchen, das in Deutschland lebt." },
		Österreich: { description: "Österreich ist ein Land in Europa." },
		Deutschland: { description: "Deutschland ist ein Land in Europa." },
		München: { description: "München ist eine Stadt in Deutschland." },
		Klara: { description: "Klara ist Annas Schwester." }
	}
	text = `
Mein Name ist Anna. Ich komme aus Österreich und lebe seit drei Jahren in Deutschland. Ich bin 15 Jahre alt und habe zwei Geschwister: Meine Schwester heißt Klara und ist 13 Jahre alt, mein Bruder Michael ist 18 Jahre alt. Wir wohnen mit unseren Eltern in einem Haus in der Nähe von München. Meine Mutter ist Köchin, mein Vater arbeitet in einer Bank.

Ich lese gerne und mag Tiere: Wir haben einen Hund, zwei Katzen und im Garten einen Teich mit Goldfischen. Ich gehe auch gerne in die Schule, mein Lieblingsfach ist Mathematik. Physik und Chemie mag ich nicht so gerne.

Nach der Schule gehe ich oft mit meinen Freundinnen im Park spazieren, manchmal essen wir ein Eis. Am Samstag gehen wir oft ins Kino. Am Sonntag schlafe ich lange, dann koche ich mit meiner Mutter das Mittagessen. Nach dem Essen gehen wir mit dem Hund am See spazieren. Sonntag ist mein Lieblingstag!
	`
	showPopup = false
	popupPosition = { x: 0, y: 0 }
	selectedWord = ""
	startTabActive: boolean = false
	discoverTabActive: boolean = false
	userButtonSelected: boolean = false
	settingsButtonSelected: boolean = false
	currentUrl: string = ""

	constructor(private router: Router, public dataService: DataService) {
		DavUIComponents.setLocale("de-DE")

		this.router.events.forEach(data => {
			if (data instanceof NavigationStart) {
				const currentUrl = data.url.split("?")[0]

				this.startTabActive = currentUrl == "/"
				this.discoverTabActive = currentUrl.startsWith("/discover")

				setTimeout(() => {
					this.currentUrl = currentUrl
				}, 100)
			}
		})
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

	scrollToTop(path: string) {
		// TODO
	}

	navigateToPage(path: string) {
		// TODO
	}
}
