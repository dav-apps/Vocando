import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { NavigationStart, Router, RouterOutlet } from "@angular/router"
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
	imports: [RouterOutlet, FontAwesomeModule],
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

	scrollToTop(path: string) {
		// TODO
	}

	navigateToPage(path: string) {
		// TODO
	}
}
