import { Component } from "@angular/core"
import * as DavUIComponents from "dav-ui-components"

@Component({
	selector: "app-root",
	imports: [],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	constructor() {
		DavUIComponents.setLocale("de-DE")
	}
}
