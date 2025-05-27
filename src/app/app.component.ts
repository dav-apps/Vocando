import {
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	ViewChild
} from "@angular/core"
import {
	NavigationStart,
	Router,
	RouterLink,
	RouterOutlet
} from "@angular/router"
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
import * as DavUIComponents from "dav-ui-components"
import { DataService } from "./services/data-service"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
	standalone: false
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

	@ViewChild("contentContainer", { static: true })
	contentContainer: ElementRef<HTMLDivElement>

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

	ngOnInit() {
		this.dataService.contentContainer = this.contentContainer.nativeElement
	}

	navigateToPage(path: string) {
		if (this.currentUrl == path) {
			this.scrollToTop(path)
		} else {
			this.router.navigate([path])
		}
	}

	scrollToTop(path: string) {
		if (path == this.currentUrl) {
			this.dataService.contentContainer.scroll({
				top: 0,
				behavior: "smooth"
			})
		}
	}
}
