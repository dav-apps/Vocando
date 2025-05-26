import { Component } from "@angular/core"

@Component({
	templateUrl: "./article-page.component.html",
	styleUrls: ["./article-page.component.scss"],
	standalone: true
})
export class ArticlePageComponent {
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
