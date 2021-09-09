import { Render } from "./Render";
import { showCard, createCards, hideCard, getPrev, turnAllCards, gameIsOver } from "./State";

function clickSquare(id) {
	if ( getPrev() !== null ) {
		setTimeout(function () {
			hideCard(Number(id));
			Render();

			if (gameIsOver()) {
				if (confirm('Начать новую игру?')){
					startGame()
				}
				console.log('win')
			}
		}, 2000);
	}
	showCard(Number(id));
	Render();
}

function startGame() {
	createCards();
	turnAllCards(true)
	Render();
	setTimeout(function () {
		turnAllCards(false)
		Render();
	}, 3000);
}

export { clickSquare, startGame };
